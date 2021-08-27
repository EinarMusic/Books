import Vue from "vue";
import VueRouter from "vue-router";

// SearchForBooks
import ShowList from "../components/SearchForBooks/ShowList";
import SearchBooks from "../components/SearchForBooks/SearchBooks";
import ShowSpecificBook from "../components/SearchForBooks/ShowSpecificBook";

// ForReadList
import ReadList from "../components/ForReadList/ReadList";
import ReadLater from "../components/ForReadList/ReadLater";
import NewReadList from "../components/ForReadList/NewReadList";
import NewReadLater from "../components/ForReadList/NewReadLater";

// readlist
import MyListForRead from "../components/ReadListBtn/MyListForRead";
import MyListForLater from "../components/ReadListBtn/MyListForLater";
import CreateNewList from "../components/ReadListBtn/CreateNewList";
import MyReadingsList from "../components/ReadListBtn/MyReadingsList";

// profile
import ShowMyProfile from "../components/MyProfile/ShowMyProfile";
import DebateForProfile from "../components/MyProfile/DebateForProfile";
import profileRead from "../components/MyProfile/ProfileReadList";

// Post
import DebatePost from "../components/Post/DebatePost";
import PostContent from "../components/Post/PostContent";
import DebateResponses from "../components/Post/DebateResponses";
import Responses from "../components/Post/Responses";
import nuevo from "../components/Post/CreatePost";
import InputForDebate from "../components/Post/InputForDebate";
import theresponse from "../components/Post/ResponseTheResponse";

Vue.use(VueRouter);

export default new VueRouter({
	mode: "history",
	routes: [
		// SearchForBooks
		{ path: "/", component: SearchBooks },
		{ path: "/list", component: ShowList },
		{ path: "/book", component: ShowSpecificBook },
		// For Readings
		{ path: "/readList", component: ReadList },
		{ path: "/readlater", component: ReadLater },
		{ path: "/newreadlist", component: NewReadList },
		{ path: "/newreadlater", component: NewReadLater },
		//
		{ path: "/read", component: MyListForRead },
		{ path: "/later", component: MyListForLater },
		{ path: "/create", component: CreateNewList },
		{ path: "/readings", component: MyReadingsList },
		// profile
		{ path: "/profile", component: ShowMyProfile },
		{ path: "/debate", component: DebateForProfile },
		{ path: "/profileRead", component: profileRead },
		// debate
		{ path: "/post", component: DebatePost },
		{ path: "/content", component: PostContent },
		{ path: "/DebateResponses", component: DebateResponses },
		{ path: "/response", component: Responses },
		{ path: "/nuevo", component: nuevo },
		{ path: "/input", component: InputForDebate },
		{ path: "/theresponse", component: theresponse },
		//
		{ path: "*", redirect: "/" },
	],
});
