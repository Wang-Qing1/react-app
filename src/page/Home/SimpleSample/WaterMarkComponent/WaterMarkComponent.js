// WaterMarkComponent.js
import {ProCard, WaterMark} from "@ant-design/pro-components";
import BaseComponent from "../../../../components/BaseComponent/BaseComponent";

/**
 * pro-components - 水印组件
 */
export default class WaterMarkComponent extends BaseComponent {
  renderContent() {
    return (
      <>
        <ProCard
          title={'文字水印（可多行）'}
          headerBordered={true}
          style={{marginBottom: '1em'}}
        >
          <WaterMark content={['文字水印', '多行文字']}>
            <div style={{ height: 200 }} />
          </WaterMark>
        </ProCard>
        <ProCard
          title={'图片水印'}
          tooltip={'通过 image 指定图片地址。为保证图片高清且不被拉伸，请传入水印图片的宽高 width 和 height, 并上传至少两倍的宽高的 logo 图片地址。'}
          headerBordered={true}
        >
          <WaterMark
            height={36}
            width={115}
            image="https://gw.alipayobjects.com/zos/bmw-prod/59a18171-ae17-4fc5-93a0-2645f64a3aca.svg"
          >
            <div style={{ height: 200 }} />
          </WaterMark>
        </ProCard>
      </>
    );
  }
}