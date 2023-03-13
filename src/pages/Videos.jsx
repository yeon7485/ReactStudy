import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Videos() {
    const [text, setText] = useState("");
    // url로 이동
    const navigate = useNavigate();

    // 사용자가 입력하는 값 가져오기
    const handleChange = (e) => {
        setText(e.target.value);
    };
    // 엔터 눌렀을 때 입력 받은 url로 이동
    const handleSubmit = (e) => {
        e.preventDefault();
        setText("");
        navigate(`/videos/${text}`);
    };
    return (
        <div>
            Videos
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="video id : "
                    value={text}
                    onChange={handleChange}
                />
            </form>
        </div>
    );
}
