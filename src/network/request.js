import axios from "axios";

const baseUrl = "http://localhost:3000";

//调用此接口 , 可获取 banner( 轮播图 ) 数据
//0:pc(默认); 1:android; 2:iphone; 3:ipad
export function getBanner(type = 0) {
  return axios.get(`${baseUrl}/banner?type=${type}`);
}

//调用此接口 , 可获取推荐歌单
//limit: 取出数量 , 默认为 6 (不支持 offset)
export function getRecommendMusic(limit = 6) {
  return axios.get(`${baseUrl}/personalized?limit=${limit}`);
}

//调用此接口 , 传入歌单 id, 获取歌单详情(未登录状态只能获取不完整的歌单,登录后是完整的)，但是返回的 trackIds 是完整的，tracks 则是不完整的，可拿全部 trackIds 请求一次 song/detail 接口获取所有歌曲的详情
//必选参数id : 歌单id	可选参数s : 歌单最近的 s 个收藏者,默认为 8
export function getMusiList(id) {
  return axios.get(`${baseUrl}/playlist/detail?id=${id}`);
}

//调用此接口 , 传入对应的歌单id 获取歌单所有歌曲
//必选参数 : id : 歌单 id  可选参数 : limit : 限制获取歌曲的数量，默认值为当前歌单的歌曲数量  可选参数 : offset : 默认值为0，用于歌曲的分页，计算方法为 limit * offset<= 你得到的歌曲 <= limit * offset + 1
export function getLimit(id) {
  return axios.get(`${baseUrl}/playlist/track/all?id=${id}`);
}

//调用此接口 , 可获取默认搜索关键词
export function getSearchDefault() {
  return axios.get(`${baseUrl}/search/default`);
}

//调用此接口 , 传入搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开 , 如 " 周杰伦 搁浅 "( 不需要登录 ), 搜索获取的 mp3url 不能直接用 , 可通过 /song/url 接口传入歌曲 id 获取具体的播放链接
//必选参数 : keywords : 关键词 .可选参数 : limit : 返回数量 , 默认为 30 offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合, 2000:声音(搜索声音返回字段格式会不一样)
export function getSearchMusic(id) {
  return axios.get(`${baseUrl}/cloudsearch?keywords=${id}`);
}

//说明 : 调用此接口,可获取热门搜索列表
export function getHotSearch() {
  return axios.get(`${baseUrl}/search/hot`);
}

//说明 : 调用此接口,可获取热门搜索列表
export function getHotSearchX() {
  return axios.get(`${baseUrl}/search/hot/detail`);
}

//说明 : 调用此接口,手机账号密码登录
export function postCellPhone(number, password) {
  return axios.post(
    `${baseUrl}/login/cellphone?phone=${number}&password=${password}`
  );
}

//说明 : 调用此接口 ,传入手机号码, 可发送验证码
export function getSentPhone(number, ctcode = 86) {
  return axios.get(`${baseUrl}/captcha/sent?phone=${number}&ctcode=${ctcode}`);
}

//说明 : 调用此接口 ,传入手机号码和验证码, 可校验验证码是否正确
export function getPhoneCaptcha(number, captcha) {
  return axios.get(
    `${baseUrl}/captcha/verify?phone=${number}&captcha=${captcha}`
  );
}

//说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户详情
export function getUserDetail(id) {
  return axios.get(`${baseUrl}/user/detail?uid=${id}`);
}

//说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户歌单
export function getPlaylist(id) {
  return axios.get(`${baseUrl}/user/playlist?uid=${id}`);
}
