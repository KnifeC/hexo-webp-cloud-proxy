

let enable = hexo.config.webp_cloud_proxy.enable || false;
let convertList = hexo.config.webp_cloud_proxy.convert_type_list;
let pre_url = hexo.config.webp_cloud_proxy.pre_url;
let proxy_url = hexo.config.webp_cloud_proxy.proxy_url;
let priority = hexo.config.webp_cloud_proxy.priority || 10;


hexo.extend.filter.register('after_post_render', (data) => {
    if (!convertList || convertList.lenth == 0) {
        convertList = ["jpg", "jpeg", "png", "gif"];
    }
    if (!enable) {
        return;
    }
    data.content = data.content.replace(/<img(.*?)src="(.*?)"(.*?)>/gi, (str, p1, p2) => {
        let value = false;
        value = convertList.some(element => {
            return p2.endsWith(element);
        });
        if (!value) {
            return str;
        }
        if (p2.startsWith("/")) {
            let img_url = proxy_url + p2;
            return str.replace(p2, img_url)
        }
        if (p2.startsWith(pre_url)) {
            let img_url = p2.replace(pre_url, proxy_url);
            return str.replace(p2, img_url)
        }
    });
}, priority);

