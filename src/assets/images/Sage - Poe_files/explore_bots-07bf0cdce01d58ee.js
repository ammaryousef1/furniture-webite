(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6146],{1276:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/explore_bots",function(){return a(61884)}])},63583:function(e,n,a){"use strict";a.r(n);let l={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ExploreBotListItem_bot",selections:[{args:null,kind:"FragmentSpread",name:"BotLink_bot"},{args:null,kind:"FragmentSpread",name:"BotImage_bot"},{alias:null,args:null,kind:"ScalarField",name:"botId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"displayName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"followerCount",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null}],type:"Bot",abstractKey:null};l.hash="eeaa12226b30d9c0d62e13e9bad60793",n.default=l},17644:function(e,n,a){"use strict";var l,t,o,r;a.r(n);let i={fragment:{argumentDefinitions:l=[{defaultValue:20,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"}],kind:"Fragment",metadata:null,name:"ExploreBotsListPaginationQuery",selections:[{args:[{kind:"Variable",name:"count",variableName:"count"},{kind:"Variable",name:"cursor",variableName:"cursor"}],kind:"FragmentSpread",name:"ExploreBotsMain_queryRoot"}],type:"QueryRoot",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"ExploreBotsListPaginationQuery",selections:[{alias:null,args:t=[{kind:"Variable",name:"after",variableName:"cursor"},{kind:"Variable",name:"first",variableName:"count"}],concreteType:"BotsConnection",kind:"LinkedField",name:"exploreBotsConnection",plural:!1,selections:[{alias:null,args:null,concreteType:"BotEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Bot",kind:"LinkedField",name:"node",plural:!1,selections:[o={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"displayName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"deletionState",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"image",plural:!1,selections:[r={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"localName",storageKey:null}],type:"LocalBotImage",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"UrlBotImage",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"botId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"followerCount",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},r],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},o],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null}],storageKey:null},o],storageKey:null},{alias:null,args:t,filters:null,handle:"connection",key:"ExploreBotsPagedList_queryRoot_exploreBotsConnection",kind:"LinkedHandle",name:"exploreBotsConnection"}]},params:{cacheID:"c597a37e0995a146a027c09cc9bb4612",id:null,metadata:{},name:"ExploreBotsListPaginationQuery",operationKind:"query",text:"query ExploreBotsListPaginationQuery(\n  $count: Int = 20\n  $cursor: String\n) {\n  ...ExploreBotsMain_queryRoot_1G22uz\n}\n\nfragment BotImage_bot on Bot {\n  displayName\n  ...botHelpers_useDeletion_bot\n  ...BotImage_useProfileImage_bot\n}\n\nfragment BotImage_useProfileImage_bot on Bot {\n  image {\n    __typename\n    ... on LocalBotImage {\n      localName\n    }\n    ... on UrlBotImage {\n      url\n    }\n  }\n  ...botHelpers_useDeletion_bot\n}\n\nfragment BotLink_bot on Bot {\n  displayName\n}\n\nfragment ExploreBotListItem_bot on Bot {\n  ...BotLink_bot\n  ...BotImage_bot\n  botId\n  displayName\n  followerCount\n  description\n}\n\nfragment ExploreBotsMain_queryRoot_1G22uz on QueryRoot {\n  exploreBotsConnection(first: $count, after: $cursor) {\n    edges {\n      ...ExploreBotsPagedList_edges\n      cursor\n      node {\n        __typename\n        id\n      }\n      id\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n    id\n  }\n}\n\nfragment ExploreBotsPagedList_edges on BotEdge {\n  node {\n    id\n    ...ExploreBotListItem_bot\n  }\n}\n\nfragment botHelpers_useDeletion_bot on Bot {\n  deletionState\n}\n"}};i.hash="2821553524c0be7ffe5bfad54e09e334",n.default=i},27692:function(e,n,a){"use strict";var l;a.r(n);let t={argumentDefinitions:[{defaultValue:20,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"}],kind:"Fragment",metadata:{connection:[{count:"count",cursor:"cursor",direction:"forward",path:l=["exploreBotsConnection"]}],refetch:{connection:{forward:{count:"count",cursor:"cursor"},backward:null,path:l},fragmentPathInResult:[],operation:a(17644)}},name:"ExploreBotsMain_queryRoot",selections:[{alias:"exploreBotsConnection",args:null,concreteType:"BotsConnection",kind:"LinkedField",name:"__ExploreBotsPagedList_queryRoot_exploreBotsConnection_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"BotEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"ExploreBotsPagedList_edges"},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"Bot",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null}],storageKey:null}],storageKey:null}],type:"QueryRoot",abstractKey:null};t.hash="2821553524c0be7ffe5bfad54e09e334",n.default=t},99477:function(e,n,a){"use strict";a.r(n);let l={argumentDefinitions:[],kind:"Fragment",metadata:{plural:!0},name:"ExploreBotsPagedList_edges",selections:[{alias:null,args:null,concreteType:"Bot",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"ExploreBotListItem_bot"}],storageKey:null}],type:"BotEdge",abstractKey:null};l.hash="bd55b6a65ed1febe0875c4981f5ac252",n.default=l},32339:function(e,n,a){"use strict";var l,t,o,r,i,s,u,d,g;a.r(n);let c=(d={alias:null,args:null,kind:"ScalarField",name:"botId",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"handle",storageKey:null},{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"exploreBotsPageQuery",selections:[{args:null,kind:"FragmentSpread",name:"ExploreBotsMain_queryRoot"},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[l={alias:"enableExploreBotsPage",args:[{kind:"Literal",name:"gateName",value:"enable_explore_bots_page"}],kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"enable_explore_bots_page")'},{args:null,kind:"FragmentSpread",name:"PageWithChatSidebarLayout_viewer"}],storageKey:null}],type:"QueryRoot",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"exploreBotsPageQuery",selections:[{alias:null,args:t=[{kind:"Literal",name:"first",value:20}],concreteType:"BotsConnection",kind:"LinkedField",name:"exploreBotsConnection",plural:!1,selections:[{alias:null,args:null,concreteType:"BotEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Bot",kind:"LinkedField",name:"node",plural:!1,selections:[o={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"displayName",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"deletionState",storageKey:null},u={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"image",plural:!1,selections:[s={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"localName",storageKey:null}],type:"LocalBotImage",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"UrlBotImage",abstractKey:null}],storageKey:null},d,{alias:null,args:null,kind:"ScalarField",name:"followerCount",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},s],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},o],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null}],storageKey:null},o],storageKey:"exploreBotsConnection(first:20)"},{alias:null,args:t,filters:null,handle:"connection",key:"ExploreBotsPagedList_queryRoot_exploreBotsConnection",kind:"LinkedHandle",name:"exploreBotsConnection"},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"uid",storageKey:null},{alias:null,args:[{kind:"Literal",name:"includeNewModel",value:!0}],concreteType:"Bot",kind:"LinkedField",name:"availableBots",plural:!0,selections:[o,d,g,r,{alias:null,args:null,kind:"ScalarField",name:"isLimitedAccess",storageKey:null},i,u,{alias:null,args:null,kind:"ScalarField",name:"isPrivateBot",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerIsCreator",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isSystemBot",storageKey:null},{kind:"TypeDiscriminator",abstractKey:"__isNode"}],storageKey:"availableBots(includeNewModel:true)"},{alias:null,args:null,concreteType:"PoeUser",kind:"LinkedField",name:"poeUser",plural:!1,selections:[g,o],storageKey:null},{alias:"allowUserCreatedBots",args:[{kind:"Literal",name:"gateName",value:"enable_user_created_bots"}],kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"enable_user_created_bots")'},{alias:"enableUserProfilePage",args:[{kind:"Literal",name:"gateName",value:"poe_web_enable_user_profile_page"}],kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"poe_web_enable_user_profile_page")'},{alias:null,args:null,kind:"ScalarField",name:"hasCompletedMultiplayerNux",storageKey:null},{alias:"enableNux",args:[{kind:"Literal",name:"gateName",value:"poe_web_enable_nux"}],kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"poe_web_enable_nux")'},o],storageKey:null}]},params:{cacheID:"d3859b23b595b5c39f0c8e0eb4b33e5d",id:null,metadata:{},name:"exploreBotsPageQuery",operationKind:"query",text:'query exploreBotsPageQuery {\n  ...ExploreBotsMain_queryRoot\n  viewer {\n    enableExploreBotsPage: booleanGate(gateName: "enable_explore_bots_page")\n    ...PageWithChatSidebarLayout_viewer\n    id\n  }\n}\n\nfragment BotHeader_bot on Bot {\n  displayName\n  isLimitedAccess\n  ...BotImage_bot\n  ...BotLink_bot\n  ...IdAnnotation_node\n  ...botHelpers_useViewerCanAccessPrivateBot\n  ...botHelpers_useDeletion_bot\n}\n\nfragment BotImage_bot on Bot {\n  displayName\n  ...botHelpers_useDeletion_bot\n  ...BotImage_useProfileImage_bot\n}\n\nfragment BotImage_useProfileImage_bot on Bot {\n  image {\n    __typename\n    ... on LocalBotImage {\n      localName\n    }\n    ... on UrlBotImage {\n      url\n    }\n  }\n  ...botHelpers_useDeletion_bot\n}\n\nfragment BotLink_bot on Bot {\n  displayName\n}\n\nfragment ChatPageBotSwitcher_BotNavItem_bot on Bot {\n  botId\n  handle\n  id\n  ...BotHeader_bot\n}\n\nfragment ChatPageBotSwitcher_viewer on Viewer {\n  availableBots(includeNewModel: true) {\n    id\n    ...ChatPageBotSwitcher_BotNavItem_bot\n  }\n}\n\nfragment ChatPageManageBotsGroup_viewer on Viewer {\n  allowUserCreatedBots: booleanGate(gateName: "enable_user_created_bots")\n  enableExploreBotsPage: booleanGate(gateName: "enable_explore_bots_page")\n}\n\nfragment ChatPageMultiplayerLinks_viewer on Viewer {\n  poeUser {\n    handle\n    id\n  }\n}\n\nfragment ChatPageSidebar_viewer on Viewer {\n  uid\n  ...ChatPageBotSwitcher_viewer\n  ...ChatPageMultiplayerLinks_viewer\n  ...ChatPageManageBotsGroup_viewer\n  enableUserProfilePage: booleanGate(gateName: "poe_web_enable_user_profile_page")\n}\n\nfragment ExploreBotListItem_bot on Bot {\n  ...BotLink_bot\n  ...BotImage_bot\n  botId\n  displayName\n  followerCount\n  description\n}\n\nfragment ExploreBotsMain_queryRoot on QueryRoot {\n  exploreBotsConnection(first: 20) {\n    edges {\n      ...ExploreBotsPagedList_edges\n      cursor\n      node {\n        __typename\n        id\n      }\n      id\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n    id\n  }\n}\n\nfragment ExploreBotsPagedList_edges on BotEdge {\n  node {\n    id\n    ...ExploreBotListItem_bot\n  }\n}\n\nfragment IdAnnotation_node on Node {\n  __isNode: __typename\n  id\n}\n\nfragment MultiplayerNuxContextWrapper_viewer on Viewer {\n  hasCompletedMultiplayerNux\n  enableNux: booleanGate(gateName: "poe_web_enable_nux")\n}\n\nfragment PageWithChatSidebarLayout_viewer on Viewer {\n  ...ChatPageSidebar_viewer\n  ...PageWithSidebarLayout_viewer\n}\n\nfragment PageWithSidebarLayout_viewer on Viewer {\n  ...MultiplayerNuxContextWrapper_viewer\n}\n\nfragment botHelpers_useDeletion_bot on Bot {\n  deletionState\n}\n\nfragment botHelpers_useViewerCanAccessPrivateBot on Bot {\n  isPrivateBot\n  viewerIsCreator\n  isSystemBot\n}\n'}});c.hash="c153d420aeea60ee2c54ca7cd52720cb",n.default=c},32005:function(e,n,a){"use strict";var l=a(85893),t=a(48688),o=a(66474);let r=e=>(0,l.jsx)(t.Z,{leftNavItem:(0,l.jsx)(o.Z,{}),...e});n.Z=r},61884:function(e,n,a){"use strict";a.r(n),a.d(n,{__N_SSP:function(){return G},default:function(){return R}});var l,t,o,r,i,s,u=a(85893),d=a(32339),g=a(22578);a(44311);var c=a(67294),m=a(23788),p=a(12623),_=a(33591),b=a(49223),y=a.n(b),k=a(21242),B=a(45380),f=a(83972),x=a(17951),S=a.n(x);(l=o||(o={})).unknown="unknown",l.system_bot_chat="system_bot_chat",l.user_created_bot_chat="user_created_bot_chat",l.share="share",l.profile="profile",l.post="post",l.login="login",l.explore_bots="explore_bots";var F=o;(r||(r={})).click="click";var h=r;(t=i||(i={})).impression="impression",t.action="action";var L=i;(s||(s={})).bot="bot";var w=s;let N=e=>{let{bot:n,botPosition:l}=e,t=(0,g.useFragment)(a(63583),n),o=(0,c.useMemo)(()=>{let e=new Intl.NumberFormat("en-US",{notation:"compact",compactDisplay:"short"}),n=e.format(t.followerCount),a=1===t.followerCount?"follower":"followers";return"".concat(n," ").concat(a)},[t.followerCount]),r=(0,c.useCallback)(()=>{(0,f.Z)("poe/bot_discovery",{bot_id:t.botId,bot_position:l,page_type:F.explore_bots,object_type:w.bot,entry_type:L.action,action_type:h.click})},[t.botId,l]);return(0,c.useEffect)(()=>{(0,f.Z)("poe/bot_discovery",{bot_id:t.botId,bot_position:l,page_type:F.explore_bots,object_type:w.bot,entry_type:L.impression})},[t.botId,l]),(0,u.jsx)(B.Z,{bot:t,onClick:r,children:(0,u.jsxs)("div",{className:S().listItem,children:[(0,u.jsx)("div",{className:S().botImage,children:(0,u.jsx)(k.Z,{bot:t,size:48})}),(0,u.jsxs)("div",{className:S().botNameAndDescription,children:[(0,u.jsx)("div",{className:S().botName,children:t.displayName}),t.description&&(0,u.jsx)("div",{className:S().botDescription,children:t.description})]}),(0,u.jsx)("div",{className:S().followerCount,children:o})]})})},I=(0,u.jsx)("div",{className:y().loaderWrapper,children:(0,u.jsx)(_.Z,{withText:!0})},"loader"),K=e=>{let{clearError:n}=e;return(0,u.jsx)(m.PL,{onClick:n,className:y().errorState,children:"Something went wrong while loading more bots. Click here to try again..."},"errorState")},P=e=>{let{edges:n,loadNext:l,hasNext:t,isLoadingNext:o}=e,r=(0,g.useFragment)(a(99477),n),[i,s]=(0,c.useState)(null),d=(0,c.useCallback)(()=>{l(25,{onComplete:e=>{e&&s(e)}})},[l,s]),m=(0,c.useCallback)(()=>{s(null)},[s]);return(0,u.jsx)(p.Z,{className:y().infiniteScrollNew,loadMore:d,hasMore:t,isLoading:o,loadingState:I,error:!!i,errorState:(0,u.jsx)(K,{clearError:m}),threshold:1e3,children:r.map((e,n)=>(0,u.jsx)(N,{bot:e.node,botPosition:n},e.node.id))})},v=e=>{let{queryRoot:n}=e,{data:l,loadNext:t,hasNext:o,isLoadingNext:r}=(0,g.usePaginationFragment)(a(27692),n);return(0,u.jsx)(P,{edges:l.exploreBotsConnection.edges,loadNext:t,hasNext:o,isLoadingNext:r})};var C=a(32005),E=a(71069),j=a(94611),D=a(30635);let T=a(32339),[M]=(0,D.H)(e=>{let{queryRef:n}=e,a=(0,g.usePreloadedQuery)(T,n);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(j.Z,{title:"Poe - Explore bots"}),(0,u.jsx)(E.Z,{viewer:a.viewer,bot:null,header:(0,u.jsx)(C.Z,{title:"Explore bots"}),children:(0,u.jsx)(v,{queryRoot:a})})]})},d.default,{},{acceptableLoginStatus:D.Y.loggedInOnly});var G=!0,R=M},17951:function(e){e.exports={listItem:"ExploreBotListItem_listItem__7_gag",botImage:"ExploreBotListItem_botImage__SpXrn",botNameAndDescription:"ExploreBotListItem_botNameAndDescription__Fm_ru",botName:"ExploreBotListItem_botName__9ruE2",botDescription:"ExploreBotListItem_botDescription__c5iUr",followerCount:"ExploreBotListItem_followerCount__FzoIx"}},49223:function(e){e.exports={infiniteScroll:"ExploreBotsPagedList_infiniteScroll__hGGJ8",infiniteScrollNew:"ExploreBotsPagedList_infiniteScrollNew__M2Cve",loaderWrapper:"ExploreBotsPagedList_loaderWrapper__sTvdr",errorState:"ExploreBotsPagedList_errorState___ioQI"}}},function(e){e.O(0,[3061,8367,2775,1069,9774,2888,179],function(){return e(e.s=1276)}),_N_E=e.O()}]);