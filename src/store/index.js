import { createStore } from 'vuex'

export default createStore({
  state: {
		playList: [{al:{},ar:[{name:""}]}],	//防止报错
		playMusicIndex: 0,
		isPlay: false,
		slider: 0,	//控制进度条
		currentTime: 0,	//目前时间
		duration: 0,	//总时间
		user: {	//用户信息状态等
			isLogin: false,
			userName: "未登录",
			userId: 1709486043
		}
  },
  mutations: {
		setPlayList(state, value) {
			state.playList = value
		},
		setPlayMusicIndex(state, value) {
			state.playMusicIndex = value
		},
		setIsPlay(state) {
			state.isPlay = !state.isPlay
		},
		setIsPlayTrue(state) {
			state.isPlay = true
		},
		setlistChange(state) {
			state.playMusicIndex = 0
		},
		setSlider(state, value) {
			state.slider = value
		},
		setCurrentTime(state, value) {
			state.currentTime = value
		},
		setDuration(state, value) {
			state.duration = value
		}
  },
  actions: {
  },
	getters: {
		addIndex: (state) => {
			return state.playMusicIndex+=1
		},
		reduceIndex: (state) => {
			return state.playMusicIndex-=1
		}
	},
  modules: {
  }
})
