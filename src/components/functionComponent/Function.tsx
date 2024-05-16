import React, { useState } from 'react'

export default function Function() {
    const [name, setName] = useState<string>("hoa")
    /**
     * event : sự kiện
     * onClick :
     * onChange
     * onInput
     * onKeydown
     * onKeyup
     * .........
     * nơi khai báo các hàm
     * dùng các từ khóa : let const var
     */
    const handleChange = () => {
        console.log("đã gọi vào hàm handleChange");
        // xử lí
        // khi muốn cập nhất State (name)
        setName("hồng");
        // khi setName thì component re-render lại 1 lần
    }
    return (
        <div>
            Function
            <p>{name}</p>
            <button onClick={handleChange}>click</button>
        </div>
    )
}
