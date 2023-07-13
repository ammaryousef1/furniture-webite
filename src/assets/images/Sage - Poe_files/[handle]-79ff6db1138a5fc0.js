(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6616],{25987:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[handle]",function(){return a(65924)}])},76057:function(e,n,a){"use strict";a.r(n);let t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ChatPageLayout_chat",selections:[{args:null,kind:"FragmentSpread",name:"ChatPageMain_chat"},{alias:null,args:null,concreteType:"Bot",kind:"LinkedField",name:"defaultBotObject",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"isDown",storageKey:null},{args:null,kind:"FragmentSpread",name:"PageWithChatSidebarLayout_bot"},{args:null,kind:"FragmentSpread",name:"ChatPageNavbar_bot"},{args:null,kind:"FragmentSpread",name:"HardDeletedBanner_bot"},{args:null,kind:"FragmentSpread",name:"botHelpers_useDeletion_bot"}],storageKey:null}],type:"Chat",abstractKey:null};t.hash="cba33f2520585ecb8454c55eb6a98869",n.default=t},19303:function(e,n,a){"use strict";a.r(n);let t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ChatPageLayout_viewer",selections:[{args:null,kind:"FragmentSpread",name:"PageWithChatSidebarLayout_viewer"},{args:null,kind:"FragmentSpread",name:"ChatPageMain_viewer"},{args:null,kind:"FragmentSpread",name:"ChatPageNavbar_viewer"}],type:"Viewer",abstractKey:null};t.hash="c7c11c38e3eb57931fa3ac5c2cb57415",n.default=t},55121:function(e,n,a){"use strict";var t,l,i,s,o,r,g,u,d,c,m,_,b,h,p,w,y,f,B;a.r(n);let S=(c={alias:null,args:null,kind:"ScalarField",name:"handle",storageKey:null},m={kind:"TypeDiscriminator",abstractKey:"__isNode"},_={alias:null,args:null,kind:"ScalarField",name:"isPrivateBot",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"botId",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"isSystemBot",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"viewerIsCreator",storageKey:null},w={alias:null,args:null,kind:"ScalarField",name:"isLimitedAccess",storageKey:null},y=[{kind:"Literal",name:"last",value:5}],f={alias:null,args:null,kind:"ScalarField",name:"creationTime",storageKey:null},B=[{kind:"Literal",name:"gateName",value:"enable_user_created_bots"}],{fragment:{argumentDefinitions:t=[{defaultValue:null,kind:"LocalArgument",name:"displayName"}],kind:"Fragment",metadata:null,name:"HandleBotChatPageQuery",selections:[{alias:null,args:l=[{kind:"Variable",name:"displayName",variableName:"displayName"}],concreteType:"Chat",kind:"LinkedField",name:"chatOfBotDisplayName",plural:!1,selections:[{alias:null,args:null,concreteType:"Bot",kind:"LinkedField",name:"defaultBotObject",plural:!1,selections:[i={alias:null,args:null,kind:"ScalarField",name:"displayName",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"ChatPageLayout_chat"}],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[s={alias:null,args:null,kind:"ScalarField",name:"uid",storageKey:null},{args:null,kind:"FragmentSpread",name:"ChatPageLayout_viewer"}],storageKey:null}],type:"QueryRoot",abstractKey:null},kind:"Request",operation:{argumentDefinitions:t,kind:"Operation",name:"HandleBotChatPageQuery",selections:[{alias:null,args:l,concreteType:"Chat",kind:"LinkedField",name:"chatOfBotDisplayName",plural:!1,selections:[{alias:null,args:null,concreteType:"Bot",kind:"LinkedField",name:"defaultBotObject",plural:!1,selections:[i,o={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"nickname",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasWelcomeTopics",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"deletionState",storageKey:null},d={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"image",plural:!1,selections:[u={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"localName",storageKey:null}],type:"LocalBotImage",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"UrlBotImage",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PoeUser",kind:"LinkedField",name:"creator",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"size",value:"small"}],kind:"ScalarField",name:"profilePhotoUrl",storageKey:'profilePhotoUrl(size:"small")'},{alias:null,args:null,kind:"ScalarField",name:"fullName",storageKey:null},c,o,m],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"poweredBy",storageKey:null},{alias:null,args:null,concreteType:"MessageLimit",kind:"LinkedField",name:"messageLimit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"numMessagesRemaining",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"dailyLimit",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldShowRemainingMessageCount",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"resetTime",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"dailyBalance",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasSuggestedReplies",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"disclaimerText",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"messageTimeoutSecs",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isApiBot",storageKey:null},_,b,{alias:null,args:null,kind:"ScalarField",name:"contextClearWindowSecs",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"introduction",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"model",storageKey:null},h,p,{alias:null,args:null,kind:"ScalarField",name:"hasClearContext",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isDown",storageKey:null},w,c,{alias:null,args:null,kind:"ScalarField",name:"viewerIsFollower",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isPromptPublic",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"promptPlaintext",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"followerCount",storageKey:null},m],storageKey:null},o,{alias:null,args:null,kind:"ScalarField",name:"chatId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldShowDisclaimer",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"defaultBotNickname",storageKey:null},{alias:null,args:y,concreteType:"MessagesConnection",kind:"LinkedField",name:"messagesConnection",plural:!1,selections:[{alias:null,args:null,concreteType:"MessageEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Message",kind:"LinkedField",name:"node",plural:!1,selections:[o,{alias:null,args:null,kind:"ScalarField",name:"messageId",storageKey:null},f,{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"author",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"linkifiedText",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"contentType",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"suggestedReplies",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"vote",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"voteReason",storageKey:null},u,{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isOptimistic",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"timeoutLevel",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"offlineError",storageKey:null}]},m],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},o],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hasPreviousPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startCursor",storageKey:null}],storageKey:null},o],storageKey:"messagesConnection(last:5)"},{alias:null,args:y,filters:null,handle:"connection",key:"ChatMessagesView_chat_messagesConnection",kind:"LinkedHandle",name:"messagesConnection"},m],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[s,{alias:null,args:[{kind:"Literal",name:"includeNewModel",value:!0}],concreteType:"Bot",kind:"LinkedField",name:"availableBots",plural:!0,selections:[o,b,c,i,w,g,d,_,p,h,r,{alias:null,args:null,concreteType:"MessageLimit",kind:"LinkedField",name:"messageLimit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"monthlyLimit",storageKey:null}],storageKey:null},m],storageKey:"availableBots(includeNewModel:true)"},{alias:null,args:null,concreteType:"PoeUser",kind:"LinkedField",name:"poeUser",plural:!1,selections:[c,o,f],storageKey:null},{alias:"allowUserCreatedBots",args:B,kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"enable_user_created_bots")'},{alias:"enableExploreBotsPage",args:[{kind:"Literal",name:"gateName",value:"enable_explore_bots_page"}],kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"enable_explore_bots_page")'},{alias:"enableUserProfilePage",args:[{kind:"Literal",name:"gateName",value:"poe_web_enable_user_profile_page"}],kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"poe_web_enable_user_profile_page")'},{alias:null,args:null,kind:"ScalarField",name:"hasCompletedMultiplayerNux",storageKey:null},{alias:"enableNux",args:[{kind:"Literal",name:"gateName",value:"poe_web_enable_nux"}],kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"poe_web_enable_nux")'},{alias:"allowImages",args:[{kind:"Literal",name:"gateName",value:"poe_allow_images"}],kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"poe_allow_images")'},{alias:"allowImagesForApiBots",args:[{kind:"Literal",name:"gateName",value:"poe_allow_images_for_api_bots"}],kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"poe_allow_images_for_api_bots")'},{alias:"allowsUserBotCreation",args:B,kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"enable_user_created_bots")'},{alias:"enableSharingApiBots",args:[{kind:"Literal",name:"gateName",value:"enable_sharing_api_bots"}],kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"enable_sharing_api_bots")'},{alias:null,args:null,kind:"ScalarField",name:"isEligibleForWebSubscriptions",storageKey:null},{alias:"webPurchasesEnabled",args:[{kind:"Literal",name:"gateName",value:"poe_enable_web_purchases"}],kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"poe_enable_web_purchases")'},{alias:null,args:null,kind:"ScalarField",name:"removeWelcomeTopicsVariant",storageKey:null},{alias:"showStopButton",args:[{kind:"Literal",name:"gateName",value:"poe_stop_button_web"}],kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"poe_stop_button_web")'},{alias:null,args:null,concreteType:"Subscription",kind:"LinkedField",name:"subscription",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"isActive",storageKey:null},o,{alias:null,args:null,kind:"ScalarField",name:"expiresTime",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"willCancelAtPeriodEnd",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"WebSubscriptionPriceInfo",kind:"LinkedField",name:"webSubscriptionPriceInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"yearlyPrice",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"yearlyPricePerMonth",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"yearlyPercentageSavings",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isFreeTrialAvailable",storageKey:null},o,{alias:null,args:null,kind:"ScalarField",name:"monthlyPrice",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldSeeWebSubscriptionAnnouncement",storageKey:null},o],storageKey:null}]},params:{cacheID:"7211148fca7c53dac77b3bdccb01e45f",id:null,metadata:{},name:"HandleBotChatPageQuery",operationKind:"query",text:'query HandleBotChatPageQuery(\n  $displayName: String!\n) {\n  chatOfBotDisplayName(displayName: $displayName) {\n    defaultBotObject {\n      displayName\n      id\n    }\n    ...ChatPageLayout_chat\n    id\n  }\n  viewer {\n    uid\n    ...ChatPageLayout_viewer\n    id\n  }\n}\n\nfragment BotDefaultInfoCard_bot on Bot {\n  displayName\n}\n\nfragment BotDeletionButton_bot on Bot {\n  id\n  botId\n}\n\nfragment BotFollowStateButton_bot on Bot {\n  id\n  viewerIsFollower\n  botId\n  followerCount\n}\n\nfragment BotHeader_bot on Bot {\n  displayName\n  isLimitedAccess\n  ...BotImage_bot\n  ...BotLink_bot\n  ...IdAnnotation_node\n  ...botHelpers_useViewerCanAccessPrivateBot\n  ...botHelpers_useDeletion_bot\n}\n\nfragment BotImage_bot on Bot {\n  displayName\n  ...botHelpers_useDeletion_bot\n  ...BotImage_useProfileImage_bot\n}\n\nfragment BotImage_useProfileImage_bot on Bot {\n  image {\n    __typename\n    ... on LocalBotImage {\n      localName\n    }\n    ... on UrlBotImage {\n      url\n    }\n  }\n  ...botHelpers_useDeletion_bot\n}\n\nfragment BotInfoCardBody_bot on Bot {\n  description\n}\n\nfragment BotInfoCardFooter_bot on Bot {\n  poweredBy\n}\n\nfragment BotInfoCardHeader_bot on Bot {\n  displayName\n  ...BotImage_bot\n  ...IdAnnotation_node\n  creator {\n    ...UserHandle_user\n    id\n  }\n}\n\nfragment BotInfoCard_bot on Bot {\n  ...BotInfoCardHeader_bot\n  ...BotInfoCardBody_bot\n  ...BotInfoCardFooter_bot\n}\n\nfragment BotInfoModal_bot on Bot {\n  displayName\n  handle\n  ...BotImage_bot\n  description\n  ...ChatPageDisclaimer_bot\n  poweredBy\n  disclaimerText\n  creator {\n    ...UserHandle_user\n    id\n  }\n  viewerIsFollower\n  viewerIsCreator\n  isPromptPublic\n  promptPlaintext\n  isPrivateBot\n  isSystemBot\n  isApiBot\n  ...BotDeletionButton_bot\n  ...BotShareButton_bot\n  ...BotFollowStateButton_bot\n  ...IdAnnotation_node\n  ...botHelpers_useViewerCanAccessPrivateBot\n  ...botHelpers_useDeletion_bot\n}\n\nfragment BotInfoModal_viewer on Viewer {\n  allowUserCreatedBots: booleanGate(gateName: "enable_user_created_bots")\n  enableSharingApiBots: booleanGate(gateName: "enable_sharing_api_bots")\n}\n\nfragment BotLink_bot on Bot {\n  displayName\n}\n\nfragment BotShareButton_bot on Bot {\n  handle\n  botId\n}\n\nfragment ChatBotHeader_bot on Bot {\n  ...BotHeader_bot\n  ...BotInfoModal_bot\n}\n\nfragment ChatBotHeader_viewer on Viewer {\n  ...BotInfoModal_viewer\n}\n\nfragment ChatMessageDownvotedButton_message on Message {\n  ...MessageFeedbackReasonModal_message\n  ...MessageFeedbackOtherModal_message\n}\n\nfragment ChatMessageDropdownMenu_bot on Bot {\n  isApiBot\n  isPrivateBot\n  botId\n}\n\nfragment ChatMessageDropdownMenu_message on Message {\n  id\n  messageId\n  vote\n  text\n  author\n  ...chatHelpers_isBotMessage\n}\n\nfragment ChatMessageDropdownMenu_viewer on Viewer {\n  allowsUserBotCreation: booleanGate(gateName: "enable_user_created_bots")\n  enableSharingApiBots: booleanGate(gateName: "enable_sharing_api_bots")\n}\n\nfragment ChatMessageFeedbackButtons_bot on Bot {\n  isApiBot\n  isPrivateBot\n}\n\nfragment ChatMessageFeedbackButtons_message on Message {\n  id\n  messageId\n  vote\n  voteReason\n  ...ChatMessageDownvotedButton_message\n}\n\nfragment ChatMessageFeedbackButtons_viewer on Viewer {\n  enableSharingApiBots: booleanGate(gateName: "enable_sharing_api_bots")\n}\n\nfragment ChatMessageInputView_chat on Chat {\n  id\n  chatId\n  defaultBotObject {\n    nickname\n    messageLimit {\n      dailyBalance\n      shouldShowRemainingMessageCount\n    }\n    hasClearContext\n    isDown\n    displayName\n    ...botHelpers_useDeletion_bot\n    id\n  }\n  shouldShowDisclaimer\n  ...chatHelpers_useSendMessage_chat\n  ...chatHelpers_useSendChatBreak_chat\n}\n\nfragment ChatMessageInputView_edges on MessageEdge {\n  node {\n    ...chatHelpers_isChatBreak\n    ...chatHelpers_isHumanMessage\n    state\n    text\n    id\n  }\n}\n\nfragment ChatMessageOverflowButton_bot on Bot {\n  ...ChatMessageDropdownMenu_bot\n}\n\nfragment ChatMessageOverflowButton_message on Message {\n  text\n  ...ChatMessageDropdownMenu_message\n  ...chatHelpers_isBotMessage\n}\n\nfragment ChatMessageOverflowButton_viewer on Viewer {\n  ...ChatMessageDropdownMenu_viewer\n}\n\nfragment ChatMessageSuggestedReplies_SuggestedReplyButton_chat on Chat {\n  ...chatHelpers_useSendMessage_chat\n}\n\nfragment ChatMessageSuggestedReplies_SuggestedReplyButton_message on Message {\n  messageId\n}\n\nfragment ChatMessageSuggestedReplies_chat on Chat {\n  ...ChatWelcomeView_chat\n  ...ChatMessageSuggestedReplies_SuggestedReplyButton_chat\n  defaultBotObject {\n    hasWelcomeTopics\n    hasSuggestedReplies\n    isApiBot\n    id\n  }\n}\n\nfragment ChatMessageSuggestedReplies_message on Message {\n  suggestedReplies\n  ...ChatMessageSuggestedReplies_SuggestedReplyButton_message\n}\n\nfragment ChatMessageSuggestedReplies_viewer on Viewer {\n  removeWelcomeTopicsVariant\n}\n\nfragment ChatMessage_chat on Chat {\n  defaultBotObject {\n    hasWelcomeTopics\n    hasSuggestedReplies\n    disclaimerText\n    displayName\n    messageTimeoutSecs\n    ...ChatPageDisclaimer_bot\n    ...ChatPageRateLimitedBanner_bot\n    ...ChatMessageFeedbackButtons_bot\n    ...ChatMessageOverflowButton_bot\n    id\n  }\n  chatId\n  defaultBotNickname\n  ...ChatMessageSuggestedReplies_chat\n  ...ChatWelcomeView_chat\n  ...chatHelpers_useTimeoutLevel_chat\n}\n\nfragment ChatMessage_message on Message {\n  id\n  messageId\n  text\n  author\n  linkifiedText\n  state\n  contentType\n  ...ChatMessageSuggestedReplies_message\n  ...ChatMessageFeedbackButtons_message\n  ...ChatMessageOverflowButton_message\n  ...chatHelpers_isHumanMessage\n  ...chatHelpers_isBotMessage\n  ...chatHelpers_isChatBreak\n  ...chatHelpers_useTimeoutLevel\n  ...MarkdownLinkInner_message\n  ...IdAnnotation_node\n}\n\nfragment ChatMessage_viewer on Viewer {\n  ...Message_viewer\n  ...ChatMessageOverflowButton_viewer\n  ...ChatPageRateLimitedBanner_viewer\n  ...ChatMessageFeedbackButtons_viewer\n  ...ChatMessageSuggestedReplies_viewer\n  removeWelcomeTopicsVariant\n  poeUser {\n    creationTime\n    id\n  }\n}\n\nfragment ChatMessagesView_EmptyChat_chat on Chat {\n  defaultBotObject {\n    nickname\n    hasWelcomeTopics\n    ...BotInfoCard_bot\n    ...BotDefaultInfoCard_bot\n    ...ChatPageRateLimitedBanner_bot\n    id\n  }\n  ...ChatWelcomeView_chat\n}\n\nfragment ChatMessagesView_EmptyChat_viewer on Viewer {\n  ...ChatPageRateLimitedBanner_viewer\n}\n\nfragment ChatMessagesView_chat on Chat {\n  ...ChatMessagesView_EmptyChat_chat\n  ...ChatMessage_chat\n  ...IdAnnotation_node\n  defaultBotObject {\n    ...BotInfoCard_bot\n    ...BotDefaultInfoCard_bot\n    nickname\n    id\n  }\n}\n\nfragment ChatMessagesView_edges on MessageEdge {\n  ...ChatMessagesView_useMessagePairs_edges\n  ...ChatStopMessageButton_edges\n  node {\n    ...chatHelpers_isBotMessage\n    id\n  }\n}\n\nfragment ChatMessagesView_useMessagePairs_edges on MessageEdge {\n  node {\n    id\n    messageId\n    creationTime\n    text\n    ...ChatMessage_message\n    ...chatHelpers_isBotMessage\n    ...chatHelpers_isHumanMessage\n    ...chatHelpers_isChatBreak\n  }\n}\n\nfragment ChatMessagesView_viewer on Viewer {\n  ...ChatMessage_viewer\n  ...ChatMessagesView_EmptyChat_viewer\n  ...ChatStopMessageButton_viewer\n}\n\nfragment ChatPageBotSwitcher_BotNavItem_bot on Bot {\n  botId\n  handle\n  id\n  ...BotHeader_bot\n}\n\nfragment ChatPageBotSwitcher_BotNavItem_currentBot on Bot {\n  botId\n  id\n}\n\nfragment ChatPageBotSwitcher_bot on Bot {\n  ...ChatPageBotSwitcher_BotNavItem_currentBot\n}\n\nfragment ChatPageBotSwitcher_viewer on Viewer {\n  availableBots(includeNewModel: true) {\n    id\n    ...ChatPageBotSwitcher_BotNavItem_bot\n  }\n}\n\nfragment ChatPageDeleteFooter_chat on Chat {\n  ...MessageDeleteConfirmationModal_chat\n}\n\nfragment ChatPageDisclaimer_bot on Bot {\n  disclaimerText\n}\n\nfragment ChatPageLayout_chat on Chat {\n  ...ChatPageMain_chat\n  defaultBotObject {\n    isDown\n    ...PageWithChatSidebarLayout_bot\n    ...ChatPageNavbar_bot\n    ...HardDeletedBanner_bot\n    ...botHelpers_useDeletion_bot\n    id\n  }\n}\n\nfragment ChatPageLayout_viewer on Viewer {\n  ...PageWithChatSidebarLayout_viewer\n  ...ChatPageMain_viewer\n  ...ChatPageNavbar_viewer\n}\n\nfragment ChatPageMainFooter_chat on Chat {\n  defaultBotObject {\n    ...ChatPageMainFooter_useAccessMessage_bot\n    id\n  }\n  ...ChatMessageInputView_chat\n  ...ChatPageShareFooter_chat\n  ...ChatPageDeleteFooter_chat\n}\n\nfragment ChatPageMainFooter_edges on MessageEdge {\n  ...ChatMessageInputView_edges\n}\n\nfragment ChatPageMainFooter_useAccessMessage_bot on Bot {\n  ...botHelpers_useDeletion_bot\n  ...botHelpers_useViewerCanAccessPrivateBot\n}\n\nfragment ChatPageMain_chat on Chat {\n  id\n  chatId\n  ...ChatPageShareFooter_chat\n  ...ChatPageDeleteFooter_chat\n  ...ChatMessagesView_chat\n  ...MarkdownLinkInner_chat\n  ...chatHelpers_useUpdateStaleChat_chat\n  ...ChatSubscriptionPaywallContextWrapper_chat\n  ...ChatPageMainFooter_chat\n  messagesConnection(last: 5) {\n    edges {\n      ...ChatMessagesView_edges\n      ...ChatPageMainFooter_edges\n      ...MarkdownLinkInner_edges\n      node {\n        ...chatHelpers_useUpdateStaleChat_message\n        id\n        __typename\n      }\n      cursor\n      id\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n    id\n  }\n}\n\nfragment ChatPageMain_viewer on Viewer {\n  ...ChatMessagesView_viewer\n  ...ChatSubscriptionPaywallContextWrapper_viewer\n}\n\nfragment ChatPageManageBotsGroup_viewer on Viewer {\n  allowUserCreatedBots: booleanGate(gateName: "enable_user_created_bots")\n  enableExploreBotsPage: booleanGate(gateName: "enable_explore_bots_page")\n}\n\nfragment ChatPageMultiplayerLinks_viewer on Viewer {\n  poeUser {\n    handle\n    id\n  }\n}\n\nfragment ChatPageNavActionBar_bot on Bot {\n  isSystemBot\n  isApiBot\n  isPrivateBot\n  viewerIsFollower\n  ...BotFollowStateButton_bot\n  ...BotShareButton_bot\n  ...botHelpers_useDeletion_bot\n}\n\nfragment ChatPageNavActionBar_viewer on Viewer {\n  allowUserCreatedBots: booleanGate(gateName: "enable_user_created_bots")\n  enableSharingApiBots: booleanGate(gateName: "enable_sharing_api_bots")\n}\n\nfragment ChatPageNavbar_bot on Bot {\n  ...ChatBotHeader_bot\n  ...ChatPageNavActionBar_bot\n}\n\nfragment ChatPageNavbar_viewer on Viewer {\n  ...ChatBotHeader_viewer\n  ...ChatPageNavActionBar_viewer\n}\n\nfragment ChatPageRateLimitedBanner_bot on Bot {\n  messageLimit {\n    numMessagesRemaining\n    dailyLimit\n  }\n  ...subscriptionHelpers_useBotLogData_bot\n}\n\nfragment ChatPageRateLimitedBanner_viewer on Viewer {\n  isEligibleForWebSubscriptions\n  webPurchasesEnabled: booleanGate(gateName: "poe_enable_web_purchases")\n}\n\nfragment ChatPageShareFooter_chat on Chat {\n  chatId\n}\n\nfragment ChatPageSidebar_bot on Bot {\n  ...ChatPageBotSwitcher_bot\n}\n\nfragment ChatPageSidebar_viewer on Viewer {\n  uid\n  ...ChatPageBotSwitcher_viewer\n  ...ChatPageMultiplayerLinks_viewer\n  ...ChatPageManageBotsGroup_viewer\n  enableUserProfilePage: booleanGate(gateName: "poe_web_enable_user_profile_page")\n}\n\nfragment ChatStopMessageButton_edges on MessageEdge {\n  node {\n    state\n    id\n  }\n}\n\nfragment ChatStopMessageButton_viewer on Viewer {\n  showStopButton: booleanGate(gateName: "poe_stop_button_web")\n}\n\nfragment ChatSubscriptionPaywallContextWrapper_chat on Chat {\n  defaultBotObject {\n    messageLimit {\n      numMessagesRemaining\n      shouldShowRemainingMessageCount\n      dailyLimit\n    }\n    ...ChatSubscriptionPaywallModal_bot\n    ...WebSubscriptionAnnouncementModalOpener_bot\n    ...subscriptionHelpers_useBotLogData_bot\n    id\n  }\n}\n\nfragment ChatSubscriptionPaywallContextWrapper_viewer on Viewer {\n  subscription {\n    isActive\n    id\n  }\n  ...ChatSubscriptionPaywallModal_viewer\n  ...WebSubscriptionAnnouncementModalOpener_viewer\n  ...WebSubscriptionSuccessMessage_useWebSubscriptionSuccessMessage_viewer\n  ...WebSubscriptionPaywallWrapper_viewer\n}\n\nfragment ChatSubscriptionPaywallMain_bot on Bot {\n  ...BotImage_bot\n  ...MessageLimitInfo_bot\n  ...IneligibleForWebSubscription_bot\n  ...subscriptionHelpers_useBotLogData_bot\n}\n\nfragment ChatSubscriptionPaywallMain_viewer on Viewer {\n  isEligibleForWebSubscriptions\n  ...WebSubscriptionPaywall_viewer\n  ...IneligibleForWebSubscription_viewer\n}\n\nfragment ChatSubscriptionPaywallModal_bot on Bot {\n  ...ChatSubscriptionPaywallMain_bot\n}\n\nfragment ChatSubscriptionPaywallModal_viewer on Viewer {\n  ...ChatSubscriptionPaywallMain_viewer\n}\n\nfragment ChatWelcomeView_ChatWelcomeButton_chat on Chat {\n  ...chatHelpers_useSendMessage_chat\n  defaultBotObject {\n    nickname\n    id\n  }\n}\n\nfragment ChatWelcomeView_chat on Chat {\n  ...ChatWelcomeView_ChatWelcomeButton_chat\n  defaultBotObject {\n    displayName\n    id\n  }\n}\n\nfragment HardDeletedBanner_bot on Bot {\n  viewerIsCreator\n}\n\nfragment IdAnnotation_node on Node {\n  __isNode: __typename\n  id\n}\n\nfragment IneligibleForWebSubscription_bot on Bot {\n  messageLimit {\n    numMessagesRemaining\n  }\n  ...BotImage_bot\n  ...MessageLimitInfo_bot\n}\n\nfragment IneligibleForWebSubscription_viewer on Viewer {\n  isEligibleForWebSubscriptions\n  webPurchasesEnabled: booleanGate(gateName: "poe_enable_web_purchases")\n}\n\nfragment MarkdownLinkInner_chat on Chat {\n  id\n  chatId\n  defaultBotObject {\n    nickname\n    id\n  }\n  ...chatHelpers_useSendMessage_chat\n}\n\nfragment MarkdownLinkInner_edges on MessageEdge {\n  node {\n    state\n    id\n  }\n}\n\nfragment MarkdownLinkInner_message on Message {\n  messageId\n}\n\nfragment MessageDeleteConfirmationModal_chat on Chat {\n  id\n}\n\nfragment MessageFeedbackOtherModal_message on Message {\n  id\n  messageId\n}\n\nfragment MessageFeedbackReasonModal_message on Message {\n  id\n  messageId\n}\n\nfragment MessageLimitInfo_bot on Bot {\n  displayName\n  messageLimit {\n    dailyLimit\n    numMessagesRemaining\n    shouldShowRemainingMessageCount\n    resetTime\n  }\n  ...BotImage_bot\n}\n\nfragment Message_viewer on Viewer {\n  allowImages: booleanGate(gateName: "poe_allow_images")\n  allowImagesForApiBots: booleanGate(gateName: "poe_allow_images_for_api_bots")\n}\n\nfragment MultiplayerNuxContextWrapper_viewer on Viewer {\n  hasCompletedMultiplayerNux\n  enableNux: booleanGate(gateName: "poe_web_enable_nux")\n}\n\nfragment PageWithChatSidebarLayout_bot on Bot {\n  ...ChatPageSidebar_bot\n}\n\nfragment PageWithChatSidebarLayout_viewer on Viewer {\n  ...ChatPageSidebar_viewer\n  ...PageWithSidebarLayout_viewer\n}\n\nfragment PageWithSidebarLayout_viewer on Viewer {\n  ...MultiplayerNuxContextWrapper_viewer\n}\n\nfragment SubscriptionMessageLimitExplanation_viewer on Viewer {\n  availableBots(includeNewModel: true) {\n    displayName\n    nickname\n    messageLimit {\n      monthlyLimit\n    }\n    id\n  }\n}\n\nfragment UserHandle_user on PoeUser {\n  profilePhotoUrl(size: small)\n  fullName\n  handle\n  ...IdAnnotation_node\n}\n\nfragment WebSubscriptionAnnouncementModalOpener_bot on Bot {\n  isSystemBot\n}\n\nfragment WebSubscriptionAnnouncementModalOpener_viewer on Viewer {\n  subscription {\n    isActive\n    id\n  }\n  shouldSeeWebSubscriptionAnnouncement\n  ...WebSubscriptionAnnouncement_viewer\n}\n\nfragment WebSubscriptionAnnouncement_viewer on Viewer {\n  availableBots(includeNewModel: true) {\n    displayName\n    messageLimit {\n      monthlyLimit\n    }\n    ...BotImage_bot\n    id\n  }\n  webSubscriptionPriceInfo {\n    isFreeTrialAvailable\n    id\n  }\n}\n\nfragment WebSubscriptionFreeTrialModal_viewer on Viewer {\n  ...WebSubscriptionFreeTrial_viewer\n}\n\nfragment WebSubscriptionFreeTrialPriceInfo_viewer on Viewer {\n  webSubscriptionPriceInfo {\n    yearlyPrice\n    yearlyPricePerMonth\n    id\n  }\n}\n\nfragment WebSubscriptionFreeTrialTermsOfService_viewer on Viewer {\n  webSubscriptionPriceInfo {\n    yearlyPrice\n    id\n  }\n}\n\nfragment WebSubscriptionFreeTrial_viewer on Viewer {\n  ...SubscriptionMessageLimitExplanation_viewer\n  ...WebSubscriptionFreeTrialPriceInfo_viewer\n  ...WebSubscriptionFreeTrialTermsOfService_viewer\n  ...WebSubscriptionSubscribeButton_viewer\n}\n\nfragment WebSubscriptionPaywallWrapper_viewer on Viewer {\n  ...WebSubscriptionFreeTrialModal_viewer\n  isEligibleForWebSubscriptions\n  webSubscriptionPriceInfo {\n    isFreeTrialAvailable\n    id\n  }\n}\n\nfragment WebSubscriptionPaywall_MonthlyPlan_viewer on Viewer {\n  webSubscriptionPriceInfo {\n    monthlyPrice\n    id\n  }\n}\n\nfragment WebSubscriptionPaywall_Plans_viewer on Viewer {\n  ...WebSubscriptionPaywall_YearlyPlan_viewer\n  ...WebSubscriptionPaywall_MonthlyPlan_viewer\n}\n\nfragment WebSubscriptionPaywall_YearlyPlan_viewer on Viewer {\n  webSubscriptionPriceInfo {\n    yearlyPrice\n    yearlyPricePerMonth\n    yearlyPercentageSavings\n    isFreeTrialAvailable\n    id\n  }\n}\n\nfragment WebSubscriptionPaywall_viewer on Viewer {\n  ...SubscriptionMessageLimitExplanation_viewer\n  ...WebSubscriptionPaywall_Plans_viewer\n  ...WebSubscriptionSubscribeButton_viewer\n  webSubscriptionPriceInfo {\n    monthlyPrice\n    yearlyPrice\n    id\n  }\n}\n\nfragment WebSubscriptionSubscribeButton_viewer on Viewer {\n  webSubscriptionPriceInfo {\n    isFreeTrialAvailable\n    id\n  }\n}\n\nfragment WebSubscriptionSuccessMessage_useWebSubscriptionSuccessMessage_viewer on Viewer {\n  subscription {\n    isActive\n    expiresTime\n    willCancelAtPeriodEnd\n    id\n  }\n}\n\nfragment botHelpers_useDeletion_bot on Bot {\n  deletionState\n}\n\nfragment botHelpers_useViewerCanAccessPrivateBot on Bot {\n  isPrivateBot\n  viewerIsCreator\n  isSystemBot\n}\n\nfragment chatHelpers_isBotMessage on Message {\n  ...chatHelpers_isHumanMessage\n  ...chatHelpers_isChatBreak\n}\n\nfragment chatHelpers_isChatBreak on Message {\n  author\n}\n\nfragment chatHelpers_isHumanMessage on Message {\n  author\n}\n\nfragment chatHelpers_useSendChatBreak_chat on Chat {\n  id\n  chatId\n  defaultBotObject {\n    nickname\n    introduction\n    model\n    id\n  }\n  shouldShowDisclaimer\n}\n\nfragment chatHelpers_useSendMessage_chat on Chat {\n  id\n  chatId\n  defaultBotObject {\n    id\n    nickname\n  }\n  shouldShowDisclaimer\n}\n\nfragment chatHelpers_useTimeoutLevel on Message {\n  id\n  state\n  text\n  messageId\n  author\n}\n\nfragment chatHelpers_useTimeoutLevel_chat on Chat {\n  chatId\n  defaultBotObject {\n    messageTimeoutSecs\n    nickname\n    id\n  }\n}\n\nfragment chatHelpers_useUpdateStaleChat_chat on Chat {\n  chatId\n  defaultBotObject {\n    contextClearWindowSecs\n    id\n  }\n  ...chatHelpers_useSendChatBreak_chat\n}\n\nfragment chatHelpers_useUpdateStaleChat_message on Message {\n  creationTime\n  ...chatHelpers_isChatBreak\n}\n\nfragment subscriptionHelpers_useBotLogData_bot on Bot {\n  nickname\n  displayName\n  messageLimit {\n    numMessagesRemaining\n  }\n}\n'}});S.hash="d36e4b6e51f5905eb21d7054845419ea",n.default=S},75599:function(e,n,a){"use strict";a.r(n);let t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"HardDeletedBanner_bot",selections:[{alias:null,args:null,kind:"ScalarField",name:"viewerIsCreator",storageKey:null}],type:"Bot",abstractKey:null};t.hash="5e44342ceabd41650905c8b196469c53",n.default=t},70568:function(e,n,a){"use strict";var t=a(85893),l=a(41664),i=a.n(l),s=a(22578),o=a(59590),r=a.n(o);let g=e=>{let{bot:n}=e,{viewerIsCreator:l}=(0,s.useFragment)(a(75599),n);return(0,t.jsx)("div",{className:r().hardDeletedBanner,children:(0,t.jsxs)("span",{children:["This bot has been deleted for violating our"," ",(0,t.jsx)(i(),{href:"/usage_guidelines",target:"_blank",children:"Usage Guidelines"}),". ",l&&(0,t.jsxs)(t.Fragment,{children:["If you disagree with this decision please email, please email"," ",(0,t.jsx)(i(),{href:"mailto:appeals@poe.com",children:"appeals@poe.com"}),"."]})]})})};n.Z=g},9339:function(e,n,a){"use strict";a.d(n,{Z:function(){return f}});var t=a(85893),l=a(22578),i=a(40189),s=a.n(i);let o=()=>(0,t.jsx)("div",{className:s().botDownBanner,children:"This bot is currently down."});var r=a(70568),g=a(22747),u=a(31525),d=a(67294);let c=()=>{let[e,n]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{let e=()=>{n(!0)},a=()=>{n(!1)};return window.addEventListener("offline",e),window.addEventListener("online",a),()=>{window.removeEventListener("offline",e),window.removeEventListener("online",a)}},[n]),e};var m=a(71069),_=a(755),b=a.n(_);let h=()=>(0,t.jsx)("div",{className:b().offlineBanner,children:"You are offline."});var p=a(90992),w=a(41266);let y=e=>{let{chat:n,viewer:i,isDefaultBot:s=!1}=e,d=(0,l.useFragment)(a(76057),n),_=(0,l.useFragment)(a(19303),i),b=c(),{isHardDeleted:y}=(0,g.iZ)(d.defaultBotObject);return(0,t.jsx)(u.Br,{children:(0,t.jsx)(m.Z,{header:(0,t.jsx)(w.Z,{bot:d.defaultBotObject,viewer:_}),viewer:_,bot:d.defaultBotObject,startAtBottom:!0,children:y?(0,t.jsx)(r.Z,{bot:d.defaultBotObject}):(0,t.jsxs)(t.Fragment,{children:[b&&(0,t.jsx)(h,{}),d.defaultBotObject.isDown&&(0,t.jsx)(o,{}),(0,t.jsx)(p.Z,{chat:d,viewer:_,isDefaultBot:s})]})})})};var f=y},65924:function(e,n,a){"use strict";a.r(n),a.d(n,{__N_SSP:function(){return b}});var t=a(85893),l=a(55121),i=a(41143),s=a.n(i),o=a(22578);a(44311);var r=a(9339),g=a(94611),u=a(30635),d=a(33213),c=a(61530);let m=a(55121),[_]=(0,u.H)(e=>{let{queryRef:n}=e,{chatOfBotDisplayName:a,viewer:l}=(0,o.usePreloadedQuery)(m,n),i=a.defaultBotObject.displayName+" - Poe";return(0,d.Rz)(),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g.Z,{title:i}),(0,t.jsx)(r.Z,{chat:a,viewer:l})]})},l.default,e=>(s()((0,c.H)(e.query.handle),"handle must be a string"),{displayName:e.query.handle}),{acceptableLoginStatus:u.Y.loggedInOnly});var b=!0;n.default=_},40189:function(e){e.exports={botDownBanner:"BotDownBanner_botDownBanner__b9m_e"}},59590:function(e){e.exports={hardDeletedBanner:"HardDeleteBanner_hardDeletedBanner__NLUbQ"}},755:function(e){e.exports={offlineBanner:"ChatOfflineBanner_offlineBanner__X1PT6"}}},function(e){e.O(0,[3061,8367,2775,1069,9774,2888,179],function(){return e(e.s=25987)}),_N_E=e.O()}]);