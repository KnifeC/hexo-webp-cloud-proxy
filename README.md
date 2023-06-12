# hexo-webp-cloud-proxy

The easiest way to use webp cloud service on hexo

## Usage

Install this package

> npm install hexo-webp-cloud-proxy --save

Then Add the following content to _config.yml:
```yaml
webp_cloud_proxy:
  enable: true
  # the suffix of img type to use webp cloud service
  convert_type_list: ["jpg", "jpeg", "png", "gif"]
  # your site url
  pre_url: https://keshane.moe
  # webp cloud service proxy url
  proxy_url: https://webp.keshane.moe
  # the filter priority, see https://hexo.io/api/filter.html
  priority: 10
```


More Information: https://docs.webp.se/webp-cloud/