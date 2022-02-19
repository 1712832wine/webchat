import React from "react";

import "./Information.scss";

function Information() {

    return (
        <div>
            <h6 className="px-2 py-3">Information</h6>
            <div className="px-2 content">
                <p className="title bold">Đây là một đồ án tốt nghiệp.</p>
                <p className="title bold">Đề tài: Chatbot hỗ trợ y tế</p>
                <p className="title text-justify">Mô tả: Hiện tại chatbot chỉ có data cho các câu hỏi về các bệnh sau: béo phì, covid, da liễu, đau mắt đỏ, mụn trứng cá, quai bị, sâu răng, tai-mũi-họng, tay-chân-miệng, thận, thủy đậu, viêm đường hô hấp, viêm xoang.</p>
                <span className="title">Tên sinh viên:</span>
                <ul className="title">
                    <li>Nguyễn Hửu Trí</li>
                    <li>Tôn Kim Ái</li>
                    <li>Đặng Văn Đạt</li>
                    <li>Lê Phú Thành</li>
                    <li>Phạm Thị Tuyết Vy</li>
                </ul>
            </div>

        </div>

    );
}
export default Information;
