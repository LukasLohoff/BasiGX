Ext.data.JsonP.BasiGX_ux_RowExpanderWithComponents({"tagname":"class","name":"BasiGX.ux.RowExpanderWithComponents","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"RowExpanderWithComponents.js","href":"RowExpanderWithComponents.html#BasiGX-ux-RowExpanderWithComponents"}],"aliases":{"plugin":["rowexpanderwithcomponents"]},"alternateClassNames":[],"extends":"Ext.grid.plugin.RowExpander","mixins":[],"requires":[],"uses":[],"members":[{"name":"enableTextSelection","tagname":"cfg","owner":"BasiGX.ux.RowExpanderWithComponents","id":"cfg-enableTextSelection","meta":{}},{"name":"expandOnClick","tagname":"cfg","owner":"BasiGX.ux.RowExpanderWithComponents","id":"cfg-expandOnClick","meta":{}},{"name":"hideExpandColumn","tagname":"cfg","owner":"BasiGX.ux.RowExpanderWithComponents","id":"cfg-hideExpandColumn","meta":{}},{"name":"rowBodyCompTemplate","tagname":"cfg","owner":"BasiGX.ux.RowExpanderWithComponents","id":"cfg-rowBodyCompTemplate","meta":{}},{"name":"rowBodyTpl","tagname":"cfg","owner":"BasiGX.ux.RowExpanderWithComponents","id":"cfg-rowBodyTpl","meta":{}},{"name":"preventRecursionArray","tagname":"property","owner":"BasiGX.ux.RowExpanderWithComponents","id":"property-preventRecursionArray","meta":{"private":true}},{"name":"addToRowComponent","tagname":"method","owner":"BasiGX.ux.RowExpanderWithComponents","id":"method-addToRowComponent","meta":{}},{"name":"bindView","tagname":"method","owner":"BasiGX.ux.RowExpanderWithComponents","id":"method-bindView","meta":{"private":true}},{"name":"getRowComponent","tagname":"method","owner":"BasiGX.ux.RowExpanderWithComponents","id":"method-getRowComponent","meta":{}},{"name":"init","tagname":"method","owner":"BasiGX.ux.RowExpanderWithComponents","id":"method-init","meta":{"private":true}},{"name":"onItemClick","tagname":"method","owner":"BasiGX.ux.RowExpanderWithComponents","id":"method-onItemClick","meta":{"private":true}},{"name":"removeAllFromRowComponent","tagname":"method","owner":"BasiGX.ux.RowExpanderWithComponents","id":"method-removeAllFromRowComponent","meta":{}},{"name":"replaceObjValues","tagname":"method","owner":"BasiGX.ux.RowExpanderWithComponents","id":"method-replaceObjValues","meta":{"private":true}}],"code_type":"ext_define","id":"class-BasiGX.ux.RowExpanderWithComponents","short_doc":"RowExpanderWithComponents plugin\n\nThis an ux originally created for ExtJS 4.2.2 by David French under MIT License. ...","component":false,"superclasses":["Ext.grid.plugin.RowExpander"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.grid.plugin.RowExpander<div class='subclass '><strong>BasiGX.ux.RowExpanderWithComponents</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/RowExpanderWithComponents.html#BasiGX-ux-RowExpanderWithComponents' target='_blank'>RowExpanderWithComponents.js</a></div></pre><div class='doc-contents'><p>RowExpanderWithComponents plugin</p>\n\n<p>This an ux originally created for ExtJS 4.2.2 by David French under MIT License.</p>\n\n<p>Modified by terrestris to fit the needs of ExtJS 6.\nhttps://github.com/davidffrench/Ext.ux.RowExpanderWithComponents</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-enableTextSelection' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.ux.RowExpanderWithComponents'>BasiGX.ux.RowExpanderWithComponents</span><br/><a href='source/RowExpanderWithComponents.html#BasiGX-ux-RowExpanderWithComponents-cfg-enableTextSelection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.ux.RowExpanderWithComponents-cfg-enableTextSelection' class='name expandable'>enableTextSelection</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>true to enable text selection within the grid\n(defaults to true). ...</div><div class='long'><p><tt>true</tt> to enable text selection within the grid\n(defaults to <tt>true</tt>).</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-expandOnClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.ux.RowExpanderWithComponents'>BasiGX.ux.RowExpanderWithComponents</span><br/><a href='source/RowExpanderWithComponents.html#BasiGX-ux-RowExpanderWithComponents-cfg-expandOnClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.ux.RowExpanderWithComponents-cfg-expandOnClick' class='name expandable'>expandOnClick</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>true to toggle a row between expanded/collapsed when single clicked\n(defaults to true). ...</div><div class='long'><p><tt>true</tt> to toggle a row between expanded/collapsed when single clicked\n(defaults to <tt>true</tt>).</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-hideExpandColumn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.ux.RowExpanderWithComponents'>BasiGX.ux.RowExpanderWithComponents</span><br/><a href='source/RowExpanderWithComponents.html#BasiGX-ux-RowExpanderWithComponents-cfg-hideExpandColumn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.ux.RowExpanderWithComponents-cfg-hideExpandColumn' class='name expandable'>hideExpandColumn</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>true to hide the column that contains the expand/collapse icons\n(defaults to true). ...</div><div class='long'><p><tt>true</tt> to hide the column that contains the expand/collapse icons\n(defaults to <tt>true</tt>).</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-rowBodyCompTemplate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.ux.RowExpanderWithComponents'>BasiGX.ux.RowExpanderWithComponents</span><br/><a href='source/RowExpanderWithComponents.html#BasiGX-ux-RowExpanderWithComponents-cfg-rowBodyCompTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.ux.RowExpanderWithComponents-cfg-rowBodyCompTemplate' class='name expandable'>rowBodyCompTemplate</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>This template will be used for every record. ...</div><div class='long'><p>This template will be used for every record. It can contain general\nExt JS Components. Text in \"{{ }}\" will be executed as JavaScript.\nSample below\nrowBodyCompTemplate: {\n            xtype: 'container',\n            items: [{\n                xtype: 'image',\n                src: '{{record.getOlLayer().get(\"legendUrl\")}}',\n                height: '{{record.getOlLayer().get(\"legendHeight\")}}',\n                alt: '{{record.getOlLayer().get(\"legendUrl\")}}'\n            }]\n        }\n(defaults to <tt>null</tt>).</p>\n</div></div></div><div id='cfg-rowBodyTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.ux.RowExpanderWithComponents'>BasiGX.ux.RowExpanderWithComponents</span><br/><a href='source/RowExpanderWithComponents.html#BasiGX-ux-RowExpanderWithComponents-cfg-rowBodyTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.ux.RowExpanderWithComponents-cfg-rowBodyTpl' class='name expandable'>rowBodyTpl</a> : XTemplate<span class=\"signature\"></span></div><div class='description'><div class='short'><p>This needs to default to the below for ExtJS components to render to the correct row\n(defaults to <tt><div id=\"display-row-{id}\"> </div></tt>).</p>\n</div><div class='long'><p>This needs to default to the below for ExtJS components to render to the correct row\n(defaults to <tt><div id=\"display-row-{id}\"> </div></tt>).</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-preventRecursionArray' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.ux.RowExpanderWithComponents'>BasiGX.ux.RowExpanderWithComponents</span><br/><a href='source/RowExpanderWithComponents.html#BasiGX-ux-RowExpanderWithComponents-property-preventRecursionArray' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.ux.RowExpanderWithComponents-property-preventRecursionArray' class='name expandable'>preventRecursionArray</a> : Array<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[]</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addToRowComponent' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.ux.RowExpanderWithComponents'>BasiGX.ux.RowExpanderWithComponents</span><br/><a href='source/RowExpanderWithComponents.html#BasiGX-ux-RowExpanderWithComponents-method-addToRowComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.ux.RowExpanderWithComponents-method-addToRowComponent' class='name expandable'>addToRowComponent</a>( <span class='pre'>recId, items</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Adds items to the parent ExtJS container in the rowexpander body ...</div><div class='long'><p>Adds items to the parent ExtJS container in the rowexpander body</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>recId</span> : integer<div class='sub-desc'><p>The row record id</p>\n</div></li><li><span class='pre'>items</span> : Array<div class='sub-desc'><p>ExtJS components</p>\n</div></li></ul></div></div></div><div id='method-bindView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.ux.RowExpanderWithComponents'>BasiGX.ux.RowExpanderWithComponents</span><br/><a href='source/RowExpanderWithComponents.html#BasiGX-ux-RowExpanderWithComponents-method-bindView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.ux.RowExpanderWithComponents-method-bindView' class='name expandable'>bindView</a>( <span class='pre'>view</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>allow single click to expand grid ...</div><div class='long'><p>allow single click to expand grid</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getRowComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.ux.RowExpanderWithComponents'>BasiGX.ux.RowExpanderWithComponents</span><br/><a href='source/RowExpanderWithComponents.html#BasiGX-ux-RowExpanderWithComponents-method-getRowComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.ux.RowExpanderWithComponents-method-getRowComponent' class='name expandable'>getRowComponent</a>( <span class='pre'>recId</span> ) : Ext.container.Container<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the parent ExtJS container in the rowexpander body from the rows record id ...</div><div class='long'><p>Gets the parent ExtJS container in the rowexpander body from the rows record id</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>recId</span> : integer<div class='sub-desc'><p>The row record id</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.container.Container</span><div class='sub-desc'><p>the parent ExtJS container in the rowexpander body</p>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.ux.RowExpanderWithComponents'>BasiGX.ux.RowExpanderWithComponents</span><br/><a href='source/RowExpanderWithComponents.html#BasiGX-ux-RowExpanderWithComponents-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.ux.RowExpanderWithComponents-method-init' class='name expandable'>init</a>( <span class='pre'>grid</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>grid</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-onItemClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.ux.RowExpanderWithComponents'>BasiGX.ux.RowExpanderWithComponents</span><br/><a href='source/RowExpanderWithComponents.html#BasiGX-ux-RowExpanderWithComponents-method-onItemClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.ux.RowExpanderWithComponents-method-onItemClick' class='name expandable'>onItemClick</a>( <span class='pre'>view, record, row, rowIdx</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>allow single click to expand grid ...</div><div class='long'><p>allow single click to expand grid</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>record</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>row</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>rowIdx</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-removeAllFromRowComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.ux.RowExpanderWithComponents'>BasiGX.ux.RowExpanderWithComponents</span><br/><a href='source/RowExpanderWithComponents.html#BasiGX-ux-RowExpanderWithComponents-method-removeAllFromRowComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.ux.RowExpanderWithComponents-method-removeAllFromRowComponent' class='name expandable'>removeAllFromRowComponent</a>( <span class='pre'>recId</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Removes all ExtJS items from the parent row component ...</div><div class='long'><p>Removes all ExtJS items from the parent row component</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>recId</span> : integer<div class='sub-desc'><p>The row record id</p>\n</div></li></ul></div></div></div><div id='method-replaceObjValues' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.ux.RowExpanderWithComponents'>BasiGX.ux.RowExpanderWithComponents</span><br/><a href='source/RowExpanderWithComponents.html#BasiGX-ux-RowExpanderWithComponents-method-replaceObjValues' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.ux.RowExpanderWithComponents-method-replaceObjValues' class='name expandable'>replaceObjValues</a>( <span class='pre'>obj, record</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Converts all string values with {{}} to code\nExample: '{{record.get('test'}}' converts to record.get('test') ...</div><div class='long'><p>Converts all string values with {{}} to code\nExample: '{{record.get('test'}}' converts to record.get('test')</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>record</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});