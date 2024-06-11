import React from 'react'

export default function NqnListTask({renderNqnListTasks, onNqnTaskEdit, onNqnTaskDelete}) {
    console.log(renderNqnListTasks);
    // ham xu ly
const nqnHandleEdit = (param)=>{
    console.log("Click edit:", param);
    onNqnTaskEdit(param)
}
    // ham xu ly xoa
    const nqnHandleDelete = (param) => {
        if(window.confirm("ban co chac chan xoa khong")){
            onNqnTaskDelete(param)
        }
    }
    // render data
    let nqnElementTask = renderNqnListTasks.map((task, index)=>{
        return (
            <>
            <tr key={index}>
            <td>{index+1}</td>
            <td>{task.nqn_taskId}</td>
            <td>{task.nqn_taskName}</td>
            <td>{task.nqn_level}</td>
            <td>{task.nqn_lop}</td>
            <td>
                <button className='btn btn-success'
                onClick={()=>nqnHandleEdit(task)}
                >Edit</button>
                <button className='btn btn-danger' onClick={()=>nqnHandleDelete(task)}>Del</button>
            </td>
            </tr>
            </>
        )
    })
  return (
    <div>
        <h2>Danh sach nhiem vu</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Mã Sinh Viên</th>
                    <th>Tên</th>
                    <th>Khóa</th>
                    <th>Lớp</th>
                </tr>
            </thead>
            <tbody>
                {nqnElementTask}
            </tbody>
        </table>
    </div>
  )
}
