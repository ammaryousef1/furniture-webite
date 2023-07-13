(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7805],{70837:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/[handle]",function(){return a(92750)}])},39970:function(e,n,a){"use strict";var l,o,r,t,i,s,u,d,g,m,_,p,P,c,f,b,U,y,w,k,B,F,S;a.r(n);let h=(l=[{defaultValue:null,kind:"LocalArgument",name:"handle"}],o=[{kind:"Variable",name:"handle",variableName:"handle"}],t={alias:"enableUserProfilePage",args:[{kind:"Literal",name:"gateName",value:"poe_web_enable_user_profile_page"}],kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"poe_web_enable_user_profile_page")'},i={alias:"enableI18n",args:[{kind:"Literal",name:"gateName",value:"poe_enable_i18n_web"}],kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"poe_enable_i18n_web")'},s={alias:null,args:null,kind:"ScalarField",name:"uid",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"handle",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"followerCount",storageKey:null},_={alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},P={alias:null,args:null,concreteType:"PoeUser",kind:"LinkedField",name:"author",plural:!1,selections:[{alias:"smallProfilePhotoUrl",args:[{kind:"Literal",name:"size",value:"small"}],kind:"ScalarField",name:"profilePhotoUrl",storageKey:'profilePhotoUrl(size:"small")'},d={alias:null,args:null,kind:"ScalarField",name:"profilePhotoUrl",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"fullName",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},c={kind:"TypeDiscriminator",abstractKey:"__isNode"},w={alias:null,args:null,kind:"ScalarField",name:"isPrivateBot",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"viewerIsCreator",storageKey:null},B={alias:null,args:null,kind:"ScalarField",name:"isSystemBot",storageKey:null},F={alias:null,args:null,kind:"ScalarField",name:"botId",storageKey:null},S=[g,f={alias:null,args:null,kind:"ScalarField",name:"displayName",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"isLimitedAccess",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},U={alias:null,args:null,kind:"ScalarField",name:"deletionState",storageKey:null},y={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"localName",storageKey:null}],type:"LocalBotImage",abstractKey:null},{kind:"InlineFragment",selections:[p],type:"UrlBotImage",abstractKey:null}],storageKey:null},w,k,B,{alias:null,args:null,kind:"ScalarField",name:"viewerIsFollower",storageKey:null},F,m,c],{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"HandleProfilePageQuery",selections:[{alias:"user",args:o,concreteType:"PoeUser",kind:"LinkedField",name:"userWithHandle",plural:!1,selections:[r,{args:null,kind:"FragmentSpread",name:"UserProfilePageLayout_poeUser"}],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[t,i,{args:null,kind:"FragmentSpread",name:"UserProfilePageLayout_viewer"}],storageKey:null}],type:"QueryRoot",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"HandleProfilePageQuery",selections:[{alias:"user",args:o,concreteType:"PoeUser",kind:"LinkedField",name:"userWithHandle",plural:!1,selections:[r,s,u,{alias:null,args:null,kind:"ScalarField",name:"bio",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerIsUser",storageKey:null},{alias:"mediumProfilePhotoUrl",args:[{kind:"Literal",name:"size",value:"medium"}],kind:"ScalarField",name:"profilePhotoUrl",storageKey:'profilePhotoUrl(size:"medium")'},d,g,{alias:null,args:null,kind:"ScalarField",name:"viewerIsFollowing",storageKey:null},m,{alias:null,args:null,kind:"ScalarField",name:"followeeCount",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"postCount",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"createdBotCount",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"followeeBotCount",storageKey:null},{alias:null,args:null,concreteType:"PoePost",kind:"LinkedField",name:"posts",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"poePostId",storageKey:null},_,{alias:null,args:null,kind:"ScalarField",name:"postType",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"creationTime",storageKey:null},p,{alias:null,args:null,concreteType:"PoePost",kind:"LinkedField",name:"repostParent",plural:!1,selections:[_,P,g],storageKey:null},P,g,c],storageKey:null},{alias:null,args:null,concreteType:"Bot",kind:"LinkedField",name:"createdBots",plural:!0,selections:S,storageKey:null},{alias:null,args:null,concreteType:"Bot",kind:"LinkedField",name:"followeeBots",plural:!0,selections:S,storageKey:null},c],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[t,i,s,{alias:null,args:[{kind:"Literal",name:"includeNewModel",value:!0}],concreteType:"Bot",kind:"LinkedField",name:"availableBots",plural:!0,selections:[g,F,u,f,b,U,y,w,k,B,c],storageKey:"availableBots(includeNewModel:true)"},{alias:null,args:null,concreteType:"PoeUser",kind:"LinkedField",name:"poeUser",plural:!1,selections:[u,g],storageKey:null},{alias:"allowUserCreatedBots",args:[{kind:"Literal",name:"gateName",value:"enable_user_created_bots"}],kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"enable_user_created_bots")'},{alias:"enableExploreBotsPage",args:[{kind:"Literal",name:"gateName",value:"enable_explore_bots_page"}],kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"enable_explore_bots_page")'},{alias:null,args:null,kind:"ScalarField",name:"hasCompletedMultiplayerNux",storageKey:null},{alias:"enableNux",args:[{kind:"Literal",name:"gateName",value:"poe_web_enable_nux"}],kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"poe_web_enable_nux")'},g],storageKey:null}]},params:{cacheID:"628f96e39737db4164adfe44d5c0099c",id:null,metadata:{},name:"HandleProfilePageQuery",operationKind:"query",text:'query HandleProfilePageQuery(\n  $handle: String!\n) {\n  user: userWithHandle(handle: $handle) {\n    fullName\n    ...UserProfilePageLayout_poeUser\n    id\n  }\n  viewer {\n    enableUserProfilePage: booleanGate(gateName: "poe_web_enable_user_profile_page")\n    enableI18n: booleanGate(gateName: "poe_enable_i18n_web")\n    ...UserProfilePageLayout_viewer\n    id\n  }\n}\n\nfragment BotFollowStateButton_bot on Bot {\n  id\n  viewerIsFollower\n  botId\n  followerCount\n}\n\nfragment BotHeader_bot on Bot {\n  displayName\n  isLimitedAccess\n  ...BotImage_bot\n  ...BotLink_bot\n  ...IdAnnotation_node\n  ...botHelpers_useViewerCanAccessPrivateBot\n  ...botHelpers_useDeletion_bot\n}\n\nfragment BotHeader_bot_13d6ew on Bot {\n  displayName\n  isLimitedAccess\n  description\n  ...BotImage_bot\n  ...BotLink_bot\n  ...IdAnnotation_node\n  ...botHelpers_useViewerCanAccessPrivateBot\n  ...botHelpers_useDeletion_bot\n}\n\nfragment BotImage_bot on Bot {\n  displayName\n  ...botHelpers_useDeletion_bot\n  ...BotImage_useProfileImage_bot\n}\n\nfragment BotImage_useProfileImage_bot on Bot {\n  image {\n    __typename\n    ... on LocalBotImage {\n      localName\n    }\n    ... on UrlBotImage {\n      url\n    }\n  }\n  ...botHelpers_useDeletion_bot\n}\n\nfragment BotLink_bot on Bot {\n  displayName\n}\n\nfragment BotListItem_bot on Bot {\n  ...BotLink_bot\n  ...BotHeader_bot_13d6ew\n  ...BotFollowStateButton_bot\n}\n\nfragment ChatPageBotSwitcher_BotNavItem_bot on Bot {\n  botId\n  handle\n  id\n  ...BotHeader_bot\n}\n\nfragment ChatPageBotSwitcher_viewer on Viewer {\n  availableBots(includeNewModel: true) {\n    id\n    ...ChatPageBotSwitcher_BotNavItem_bot\n  }\n}\n\nfragment ChatPageManageBotsGroup_viewer on Viewer {\n  allowUserCreatedBots: booleanGate(gateName: "enable_user_created_bots")\n  enableExploreBotsPage: booleanGate(gateName: "enable_explore_bots_page")\n}\n\nfragment ChatPageMultiplayerLinks_viewer on Viewer {\n  poeUser {\n    handle\n    id\n  }\n}\n\nfragment ChatPageSidebar_viewer on Viewer {\n  uid\n  ...ChatPageBotSwitcher_viewer\n  ...ChatPageMultiplayerLinks_viewer\n  ...ChatPageManageBotsGroup_viewer\n  enableUserProfilePage: booleanGate(gateName: "poe_web_enable_user_profile_page")\n}\n\nfragment IdAnnotation_node on Node {\n  __isNode: __typename\n  id\n}\n\nfragment MultiplayerNuxContextWrapper_viewer on Viewer {\n  hasCompletedMultiplayerNux\n  enableNux: booleanGate(gateName: "poe_web_enable_nux")\n}\n\nfragment PageWithChatSidebarLayout_viewer on Viewer {\n  ...ChatPageSidebar_viewer\n  ...PageWithSidebarLayout_viewer\n}\n\nfragment PageWithSidebarLayout_viewer on Viewer {\n  ...MultiplayerNuxContextWrapper_viewer\n}\n\nfragment PostPill_poePost on PoePost {\n  poePostId\n  title\n  postType\n  creationTime\n  url\n  repostParent {\n    title\n    author {\n      ...UserImage_poeUser_1J8a20\n      id\n    }\n    id\n  }\n  author {\n    ...UserImage_poeUser_1J8a20\n    id\n  }\n  ...IdAnnotation_node\n}\n\nfragment UserFollowStateButton_poeUser on PoeUser {\n  id\n  uid\n  viewerIsFollowing\n}\n\nfragment UserImage_poeUser_1J8a20 on PoeUser {\n  smallProfilePhotoUrl: profilePhotoUrl(size: small)\n  profilePhotoUrl\n  fullName\n}\n\nfragment UserImage_poeUser_2IsZsd on PoeUser {\n  mediumProfilePhotoUrl: profilePhotoUrl(size: medium)\n  profilePhotoUrl\n  fullName\n}\n\nfragment UserProfileBasicInfo_poeUser on PoeUser {\n  fullName\n  handle\n  bio\n  viewerIsUser\n  ...UserImage_poeUser_2IsZsd\n  ...UserFollowStateButton_poeUser\n  ...IdAnnotation_node\n}\n\nfragment UserProfileBotListPanel_bots on Bot {\n  id\n  ...BotListItem_bot\n}\n\nfragment UserProfileFolloweesButton_poeUser on PoeUser {\n  uid\n  followeeCount\n}\n\nfragment UserProfileFollowersButton_poeUser on PoeUser {\n  uid\n  followerCount\n}\n\nfragment UserProfileHeader_BioSection_poeUser on PoeUser {\n  bio\n}\n\nfragment UserProfileHeader_CountsSection_poeUser on PoeUser {\n  ...UserProfileFollowersButton_poeUser\n  ...UserProfileFolloweesButton_poeUser\n}\n\nfragment UserProfileHeader_poeUser on PoeUser {\n  ...UserProfileBasicInfo_poeUser\n  ...UserProfileHeader_BioSection_poeUser\n  ...UserProfileHeader_CountsSection_poeUser\n  ...UserProfileTabSwitcher_poeUser\n}\n\nfragment UserProfilePageLayout_poeUser on PoeUser {\n  ...UserProfilePageMain_poeUser\n  ...UserProfilePageNavbar_poeUser\n}\n\nfragment UserProfilePageLayout_viewer on Viewer {\n  ...PageWithChatSidebarLayout_viewer\n}\n\nfragment UserProfilePageMain_CreatedBotsListPanel_poeUser on PoeUser {\n  createdBots {\n    ...UserProfileBotListPanel_bots\n    id\n  }\n}\n\nfragment UserProfilePageMain_FollowedBotsListPanel_poeUser on PoeUser {\n  followeeBots {\n    ...UserProfileBotListPanel_bots\n    id\n  }\n}\n\nfragment UserProfilePageMain_poeUser on PoeUser {\n  uid\n  ...UserProfileHeader_poeUser\n  ...UserProfilePosts_poeUser\n  ...UserProfilePageMain_CreatedBotsListPanel_poeUser\n  ...UserProfilePageMain_FollowedBotsListPanel_poeUser\n}\n\nfragment UserProfilePageNavbar_poeUser on PoeUser {\n  viewerIsUser\n}\n\nfragment UserProfilePosts_poeUser on PoeUser {\n  posts {\n    poePostId\n    ...PostPill_poePost\n    id\n  }\n}\n\nfragment UserProfileTabSwitcher_poeUser on PoeUser {\n  postCount\n  createdBotCount\n  followeeBotCount\n}\n\nfragment botHelpers_useDeletion_bot on Bot {\n  deletionState\n}\n\nfragment botHelpers_useViewerCanAccessPrivateBot on Bot {\n  isPrivateBot\n  viewerIsCreator\n  isSystemBot\n}\n'}});h.hash="a95c8dd520ad31fee7638b63bc340c53",n.default=h},92750:function(e,n,a){"use strict";a.r(n),a.d(n,{__N_SSP:function(){return p}});var l=a(85893),o=a(39970),r=a(41143),t=a.n(r),i=a(22578),s=a(94611),u=a(84238),d=a(30635),g=a(61530);let m=a(39970),[_]=(0,d.H)(e=>{let{queryRef:n}=e,{user:a,viewer:o}=(0,i.usePreloadedQuery)(m,n);if(!o.enableUserProfilePage)return null;let r=null==a?void 0:a.fullName;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.Z,{title:r+" - Poe"}),a&&(0,l.jsx)(u.Z,{poeUser:a,viewer:o})]})},o.default,e=>(t()((0,g.H)(e.query.handle),"handle must be a string"),{handle:e.query.handle}),{acceptableLoginStatus:d.Y.loggedInOnly});var p=!0;n.default=_}},function(e){e.O(0,[3061,8367,2775,1069,4238,9774,2888,179],function(){return e(e.s=70837)}),_N_E=e.O()}]);