import React, { useState, useEffect } from 'react';
import { Button, Space, Form, message } from 'antd';
import { PreviewText } from '@react-spy/antd';

const { Select } = PreviewText;

export default () => {

    const [isPreviewText, setIsPreviewText] = useState(false);

    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue({
            sex: { label: "男", value: "male" },
            likes: [{ label: "看书", value: "0" }, { label: "跑步", value: "1" }],
        });
    }, []);

    return (
        <PreviewText previewMode={isPreviewText ? "text" : "form"}>
            <Form form={form}>
                <Form.Item
                    label="性别"
                    name="sex"
                >
                    <Select
                        allowClear
                        style={{ width: 300 }}
                        placeholder="请选择"
                        labelInValue
                        options={[{ label: "男", value: "male" }, { label: "女", value: "female" }]}
                    />
                </Form.Item>
                <Form.Item
                    label="个人喜好"
                    name="likes"
                >
                    <Select
                        allowClear
                        mode="multiple"
                        style={{ width: 300 }}
                        placeholder="请选择"
                        labelInValue
                    >
                        <Select.Option value="0">看书</Select.Option>
                        <Select.Option value="1">跑步</Select.Option>
                        <Select.Option value="2">打豆豆</Select.Option>
                    </Select>
                </Form.Item>
                <Space>
                    <Button onClick={() => setIsPreviewText(!isPreviewText)} type="dashed">切换</Button>
                    <Button onClick={() => form.resetFields()}>重置</Button>
                    <Button
                        type="primary"
                        onClick={async () => {
                            const { sex, likes } = await form.validateFields();
                            if (sex && likes) {
                                message.success(`我性别 ${sex.label}，喜欢 ${likes.map((i: { label: string; }) => i.label).join("、")}`);
                            }
                        }}
                    >
                        查询
                    </Button>
                </Space>
            </Form>
        </PreviewText>
    );
};