(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{92:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return d}));var a=o(3),n=o(7),i=(o(0),o(101)),r=o(103),l={title:"Media Player",description:"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection."},s={unversionedId:"blueprints/hooks/media_player",id:"blueprints/hooks/media_player",isDocsHomePage:!1,title:"Media Player",description:"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection.",source:"@site/docs/blueprints/hooks/media_player.mdx",sourceDirName:"blueprints/hooks",slug:"/blueprints/hooks/media_player",permalink:"/awesome-ha-blueprints/docs/blueprints/hooks/media_player",editUrl:"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/blueprints/hooks/media_player.mdx",version:"current",frontMatter:{title:"Media Player",description:"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection."}},c=[{value:"Description",id:"description",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Supported Controllers",id:"supported-controllers",children:[]},{value:"Additional Notes",id:"additional-notes",children:[]},{value:"Changelog",id:"changelog",children:[]}],p={toc:c};function d(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)(r.a,{id:"media_player",category:"hooks",mdxType:"ImportCard"}),Object(i.b)("br",null),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This blueprint is part of the ",Object(i.b)("strong",{parentName:"p"},"Controllers-Hooks Ecosystem"),". You can read more about this topic ",Object(i.b)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem"},"here"),"."))),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"An automation created with this blueprint must be linked to a ",Object(i.b)("a",{parentName:"p",href:"/docs/blueprints/controllers"},"Controller")," automation. Controllers are blueprints which allow to easily integrate a wide range of controllers and use them to run a set of actions when interacting with them. They expose an abstract interface used by Hooks to create controller-based automations."),Object(i.b)("p",{parentName:"div"},"See the list of ",Object(i.b)("a",{parentName:"p",href:"/docs/blueprints/hooks/media_player#supported-controllers"},"Controllers supported by this Hook")," for additional details."))),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)(r.c,{id:"controller",required:!0,mdxType:"Requirement"}),Object(i.b)(r.c,{name:"Media Player Integration",required:!0,mdxType:"Requirement"},Object(i.b)("p",null,"This integration provides the entity which represents a media player in Home Assistant. It should be activated by default so unless you tweaked the default configuration you're good to go."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/media_player/"},"Media Player Integration Docs"))),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)(r.b,{name:"Controller device",description:"The controller device which will control the light. Choose a value only if the integration used to connect the controller to Home Assistant exposes it as a Device. This value should match the one specified in the corresponding Controller automation.",selector:"device",required:!0,mdxType:"Input"}),Object(i.b)(r.b,{name:"Controller entity",description:"The controller entity which will control the light. Choose a value only if the integration used to connect the controller to Home Assistant exposes it as an Entity. This value should match the one specified in the corresponding Controller automation.",selector:"entity",required:!0,mdxType:"Input"}),Object(i.b)(r.b,{name:"Controller model",description:"The model for the controller used in this automation. Choose a value from the list of supported controllers.",selector:"select",required:!0,mdxType:"Input"}),Object(i.b)(r.b,{name:"Media Player",description:"Media player which will be controlled with this automation.",selector:"entity",required:!0,mdxType:"Input"}),Object(i.b)(r.b,{name:"Volume steps - short actions",description:"Number of steps from min to max volume when controlling volume with short actions (eg. button press), if the media player supports it.",selector:"number",mdxType:"Input"}),Object(i.b)(r.b,{name:"Volume steps - long actions",description:"Number of steps from min to max volume when controlling volume with long actions (eg. button hold or controller rotation), if the media player supports it.",selector:"number",mdxType:"Input"}),Object(i.b)("h2",{id:"supported-controllers"},"Supported Controllers"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/blueprints/controllers/ikea_e1524_e1810"},"IKEA E1524/E1810 5-Button Remote")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/blueprints/controllers/ikea_e1743"},"IKEA E1743 On/Off Switch & Dimmer")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/blueprints/controllers/ikea_e1744"},"IKEA E1744 SYMFONISK Rotary Remote")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/blueprints/controllers/ikea_e1812"},"IKEA E1812 Shortcut button")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/blueprints/controllers/ikea_ictc_g_1"},"IKEA ICTC-G-1 TRADFRI wireless dimmer")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/blueprints/controllers/philips_324131092621"},"Philips Hue Dimmer switch"))),Object(i.b)("h2",{id:"additional-notes"},"Additional Notes"),Object(i.b)("p",null,"Not all media players support the customization of the number of steps for volume control, due to the fact that some of them do not expose their current volume level to Home Assistant. In these situations, the automation will fallback to the ",Object(i.b)("inlineCode",{parentName:"p"},"media_player.volume_up")," and ",Object(i.b)("inlineCode",{parentName:"p"},"media_player.volume_down")," services."),Object(i.b)("h2",{id:"changelog"},"Changelog"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"2021-03-04"),": first blueprint version \ud83c\udf89"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"2021-03-07"),": add support for IKEA E1744 SYMFONISK rotary remote"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"2021-03-14"),": add support for IKEA E1812 Shortcut button, fix E1743 naming"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"2021-03-25"),": update action mapping for IKEA E1744. If you're using this Hook with an IKEA E1744, please update also the corresponding Controller blueprint"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"2021-03-26"),": add the ability to specify number of steps from min to max volume, both for short and long actions, when controlling the media player"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"2021-03-27"),": Add support for Philips Hue dimmer switch"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"2021-04-19"),": remove unused variable, fix warnings for undefined variables in Home Assistant Core >=2021.4.0")))}d.isMDXComponent=!0}}]);