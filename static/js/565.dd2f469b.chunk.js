(this["webpackJsonp@uiw/react-baidu-map"]=this["webpackJsonp@uiw/react-baidu-map"]||[]).push([[565],{1162:function(e,n,t){!function(e){"use strict";e.defineMode("puppet",(function(){var e={},n=/({)?([a-z][a-z0-9_]*)?((::[a-z][a-z0-9_]*)*::)?[a-zA-Z0-9_]+(})?/;function t(n,t){for(var i=t.split(" "),a=0;a<i.length;a++)e[i[a]]=n}function i(e,n){for(var t,i,a=!1;!e.eol()&&(t=e.next())!=n.pending;){if("$"===t&&"\\"!=i&&'"'==n.pending){a=!0;break}i=t}return a&&e.backUp(1),t==n.pending?n.continueString=!1:n.continueString=!0,"string"}return t("keyword","class define site node include import inherits"),t("keyword","case if else in and elsif default or"),t("atom","false true running present absent file directory undef"),t("builtin","action augeas burst chain computer cron destination dport exec file filebucket group host icmp iniface interface jump k5login limit log_level log_prefix macauthorization mailalias maillist mcx mount nagios_command nagios_contact nagios_contactgroup nagios_host nagios_hostdependency nagios_hostescalation nagios_hostextinfo nagios_hostgroup nagios_service nagios_servicedependency nagios_serviceescalation nagios_serviceextinfo nagios_servicegroup nagios_timeperiod name notify outiface package proto reject resources router schedule scheduled_task selboolean selmodule service source sport ssh_authorized_key sshkey stage state table tidy todest toports tosource user vlan yumrepo zfs zone zpool"),{startState:function(){var e={inDefinition:!1,inInclude:!1,continueString:!1,pending:!1};return e},token:function(t,a){return t.eatSpace()?null:function(t,a){var o=t.match(/[\w]+/,!1),s=t.match(/(\s+)?\w+\s+=>.*/,!1),c=t.match(/(\s+)?[\w:_]+(\s+)?{/,!1),r=t.match(/(\s+)?[@]{1,2}[\w:_]+(\s+)?{/,!1),u=t.next();if("$"===u)return t.match(n)?a.continueString?"variable-2":"variable":"error";if(a.continueString)return t.backUp(1),i(t,a);if(a.inDefinition){if(t.match(/(\s+)?[\w:_]+(\s+)?/))return"def";t.match(/\s+{/),a.inDefinition=!1}return a.inInclude?(t.match(/(\s+)?\S+(\s+)?/),a.inInclude=!1,"def"):t.match(/(\s+)?\w+\(/)?(t.backUp(1),"def"):s?(t.match(/(\s+)?\w+/),"tag"):o&&e.hasOwnProperty(o)?(t.backUp(1),t.match(/[\w]+/),t.match(/\s+\S+\s+{/,!1)&&(a.inDefinition=!0),"include"==o&&(a.inInclude=!0),e[o]):/(^|\s+)[A-Z][\w:_]+/.test(o)?(t.backUp(1),t.match(/(^|\s+)[A-Z][\w:_]+/),"def"):c?(t.match(/(\s+)?[\w:_]+/),"def"):r?(t.match(/(\s+)?[@]{1,2}/),"special"):"#"==u?(t.skipToEnd(),"comment"):"'"==u||'"'==u?(a.pending=u,i(t,a)):"{"==u||"}"==u?"bracket":"/"==u?(t.match(/.*?\//),"variable-3"):u.match(/[0-9]/)?(t.eatWhile(/[0-9]+/),"number"):"="==u?(">"==t.peek()&&t.next(),"operator"):(t.eatWhile(/[\w-]/),null)}(t,a)}}})),e.defineMIME("text/x-puppet","puppet")}(t(38))}}]);
//# sourceMappingURL=565.dd2f469b.chunk.js.map