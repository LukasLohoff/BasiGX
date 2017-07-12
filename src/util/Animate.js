/* Copyright (c) 2015-present terrestris GmbH & Co. KG
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @class BasiGX.util.Animate
 */
Ext.define('BasiGX.util.Animate', {
    requires: [
        'BasiGX.util.Map'
    ],
    statics: {
        shake: function(component, duration, amplitude) {
            duration = duration || 200;
            amplitude = amplitude || 5;
            var startX = component.getX();
            component.animate({
                duration: duration,
                keyframes: {
                    0: {
                        x: startX + amplitude
                    },
                    25: {
                        x: startX - amplitude
                    },
                    50: {
                        x: startX + amplitude
                    },
                    75: {
                        x: startX - amplitude
                    },
                    100: {
                        x: startX
                    }
                }
            });
        },

        /**
         * Flashes a feature on the map for the given duration.
         *
         * @param {Object} feature The ol.feature to flash
         * @param {Integer} duration The duration to animate in milliseconds
         * @return {Object} listenerKey The maps postcompose listener
         */
        flashFeature: function(feature, duration) {
            var map = BasiGX.util.Map.getMapComponent().getMap();
            var start = new Date().getTime();
            var listenerKey;

            function animate(event) {
                var vectorContext = event.vectorContext;
                var frameState = event.frameState;
                var flashGeom = feature.getGeometry().clone();
                var elapsed = frameState.time - start;
                var elapsedRatio = elapsed / duration;
                // radius will be 5 at start and 30 at end.
                var radius = ol.easing.easeOut(elapsedRatio) * 25 + 5;
                var opacity = ol.easing.easeOut(1 - elapsedRatio);
                var flashStyle;

                if (vectorContext.setStyle && vectorContext.drawGeometry) {
                    // for ol3 versions from v3.15.0
                    var isPoint = flashGeom instanceof ol.geom.Point ||
                        flashGeom instanceof ol.geom.MultiPoint;
                    var isLine = flashGeom instanceof ol.geom.LineString ||
                        flashGeom instanceof ol.geom.MultiLineString;
                    var isPoly = flashGeom instanceof ol.geom.Polygon ||
                        flashGeom instanceof ol.geom.MultiPolygon;

                    var r = 255;
                    var g = parseInt((200 * opacity), 10);
                    var b = 0;
                    var color = 'rgba(' +
                        r + ',' +
                        g + ',' +
                        b + ',' +
                        opacity +
                    ')';
                    if (isPoint) {
                        flashStyle = new ol.style.Style({
                            image: new ol.style.Circle({
                                radius: radius,
                                snapToPixel: false,
                                stroke: new ol.style.Stroke({
                                    color: color,
                                    width: 4,
                                    opacity: opacity
                                })
                            })
                        });
                    } else if (isLine) {
                        radius = ol.easing.easeOut(elapsedRatio) * 12;
                        flashStyle = new ol.style.Style({
                            stroke: new ol.style.Stroke({
                                color: color,
                                width: radius
                            })
                        });
                    } else if (isPoly) {
                        radius = ol.easing.easeOut(elapsedRatio) * 10;
                        flashStyle = new ol.style.Style({
                            stroke: new ol.style.Stroke({
                                color: color,
                                width: radius
                            })
                        });
                    }
                    vectorContext.setStyle(flashStyle);
                    vectorContext.drawGeometry(flashGeom, null);
                } else {
                    // for ol3 versions older v3.15.0
                    flashStyle = new ol.style.Circle({
                        radius: radius,
                        snapToPixel: false,
                        stroke: new ol.style.Stroke({
                            color: 'rgba(255, 0, 0, ' + opacity + ')',
                            width: 4,
                            opacity: opacity
                        })
                    });
                    vectorContext.setImageStyle(flashStyle);
                    vectorContext.drawPointGeometry(flashGeom, null);
                }

                if (elapsed > duration) {
                    ol.Observable.unByKey(listenerKey);
                    return;
                }
                // tell OL3 to continue postcompose animation
                frameState.animate = true;
            }
            listenerKey = map.on('postcompose', animate);
            map.render();
            return listenerKey;
        },

        /**
         * Takes a feature and fills it in a material style way.
         *
         * @param {Object} feature The ol.feature to flash
         * @param {Integer} duration The duration to animate in milliseconds
         * @param {Object} olEvt The ol.event where the mouse has been clicked
         * @return {Object} listenerKey The maps postcompose listener
         */
        materialFill: function(feature, duration, olEvt) {
            if (feature.get('__animating')) {
                return;
            }
            var map = BasiGX.util.Map.getMapComponent().getMap();
            var resolution = map.getView().getResolution();
            var flashGeom = feature.getGeometry().clone();
            var isPoint = flashGeom instanceof ol.geom.Point ||
                flashGeom instanceof ol.geom.MultiPoint;
            var isLine = flashGeom instanceof ol.geom.LineString ||
                flashGeom instanceof ol.geom.MultiLineString;
            var pixelRatio = ol.has.DEVICE_PIXEL_RATIO;
            var start = new Date().getTime();
            var listenerKey;
            var clickPixel = olEvt.pixel;
            feature.set('__animating', true);

            function animate(event) {
                var vectorContext = event.vectorContext;
                var context = event.context;
                var frameState = event.frameState;
                var elapsed = frameState.time - start;
                var elapsedRatio = elapsed / duration;
                var opacity = ol.easing.easeOut(1 - elapsedRatio);
                var extent = flashGeom.getExtent();
                var width = ol.extent.getWidth(extent) / resolution *
                    pixelRatio * elapsed / 300;
                var grad = context.createRadialGradient(
                    clickPixel[0],
                    clickPixel[1],
                    5,
                    clickPixel[0],
                    clickPixel[1],
                    width
                );
                var r = 255;
                var g = parseInt((200 * opacity), 10);
                var b = 0;
                var style;
                var color;

                if (elapsedRatio < 0.5) {
                    color = 'rgba(' +
                        r + ',' +
                        g + ',' +
                        b + ',' +
                        '0.5' +
                    ')';
                    grad.addColorStop(0, color);
                } else {
                    color = 'rgba(' +
                        r + ',' +
                        g + ',' +
                        b + ',' +
                        (1 - elapsedRatio) +
                    ')';
                    grad.addColorStop(0, color);
                }
                grad.addColorStop(1, 'rgba(255,255,255,0)');

                if (vectorContext.setStyle && vectorContext.drawGeometry) {
                    if (isPoint) {
                        var image = new ol.style.Circle({
                            radius: 20,
                            snapToPixel: false,
                            fill: new ol.style.Fill({
                                color: grad
                            })
                        });
                        style = new ol.style.Style({
                            image: image
                        });
                    } else if (isLine) {
                        var stroke = new ol.style.Stroke({
                            width: 10,
                            color: grad
                        });
                        style = new ol.style.Style({
                            stroke: stroke
                        });
                    } else {
                        var fill = new ol.style.Fill({
                            color: grad
                        });
                        style = new ol.style.Style({
                            fill: fill
                        });
                    }
                    vectorContext.setStyle(style);
                    vectorContext.drawGeometry(flashGeom, null);
                }

                if (elapsed > duration) {
                    ol.Observable.unByKey(listenerKey);
                    feature.set('__animating', undefined);
                    return;
                }
                // tell OL3 to continue postcompose animation
                frameState.animate = true;
            }
            listenerKey = map.on('postcompose', animate);
            map.render();
            return listenerKey;
        },

       /**
        * Moves / translates an `ol.Feature` to the given `pixel` delta in
        * in the end.
        * the given `duration` in ms, using the given style, calling a `doneFn`
        *
        * Useful e.g. when hovering clustered features to show their children.
        *
        * @param {ol.Feature} featureToMove The feature to move.
        * @param {Number} duration The duration in MS for the moving to to
        *     complete.
        * @param {Array<Number>} pixel Delta of pixels to move the feature.
        * @param {ol.style.Style} style The style to use when moving the
        *     `feature`.
        * @param {Function} doneFn The function to call when done.
        * @return {String} A listener key from a postcompose event.
        */
        moveFeature: function(featureToMove, duration, pixel, style, doneFn) {
            var map = BasiGX.util.Map.getMapComponent().getMap();
            var listenerKey;

            var geometry = featureToMove.getGeometry();
            var start = new Date().getTime();
            var resolution = map.getView().getResolution();

            if (typeof style === 'function') {
                style = style(featureToMove, resolution);
            }

            var totalDisplacement = pixel * resolution;
            var expectedFrames = duration / 1000 * 60;
            var actualFrames = 0;
            var deltaX = totalDisplacement / expectedFrames;
            var deltaY = totalDisplacement / expectedFrames;

            var animate = function(event) {
                var vectorContext = event.vectorContext;
                var frameState = event.frameState;
                var elapsed = frameState.time - start;

                geometry.translate(deltaX, deltaY);

                if (vectorContext.setFillStrokeStyle &&
                   vectorContext.setImageStyle &&
                   vectorContext.drawPointGeometry) {
                    vectorContext.setFillStrokeStyle(
                               style.getFill(), style.getStroke());
                    vectorContext.setImageStyle(style.getImage());
                    if (geometry instanceof ol.geom.Point) {
                        vectorContext.drawPointGeometry(geometry, null);
                    } else if (geometry instanceof ol.geom.LineString) {
                        vectorContext.drawLineStringGeometry(geometry, null);
                    } else {
                        vectorContext.drawPolygonGeometry(geometry, null);
                    }
                } else {
                    vectorContext.setStyle(style);
                    vectorContext.drawGeometry(geometry);
                }

                if (elapsed > duration || actualFrames >= expectedFrames) {
                    ol.Observable.unByKey(listenerKey);
                    doneFn(featureToMove);
                    return;
                }
               // tell OL3 to continue postcompose animation
                frameState.animate = true;

                actualFrames++;
            };

            listenerKey = map.on('postcompose', animate);
            map.render();
            return listenerKey;
        }
    }
});
