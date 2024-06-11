import React, { useEffect, useState } from 'react'

export default function NqnTaskAddOrEdit(renderNqnTask, renderNqnIsAddOrEdit, nqnOnSubmit) {
    // doi tuoong task
    //const nqnTaksObj = {
      //  nqn_taskId:0,
      //  nqn_taskName:"",
      //  nqn_Level:""
 //   }
    const [nqnTask, setNqnTask] = useState(renderNqnTask);
    useEffect(()=>{
        setNqnTask(renderNqnTask)
    },[renderNqnTask])
    const nqnTieuDe = renderNqnIsAddOrEdit==true?"them moi task":"sua thong tin task"
    const nqnHandlechange = (nqnEvent)=>{
        let name = nqnEvent.target.name;
        let value = nqnEvent.target.value;
        setNqnTask(prev =>{
            return{
                ...prev,
                [name]:value,
            }
        })
    }
    const nqnHandleSubmit = (nqnEvent)=>{
        nqnEvent.preventDefault();
        nqnOnSubmit(nqnTask)
    }
  return (
    <div>
        <h2>{nqnTieuDe}</h2>
        <form>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Mã Sinh Viên</span>
                <input type="text" 
                name='nqn_taskId' value={nqnTask.nqn_taskId} onChange={nqnHandlechange}
                className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"></input>
            </div>
            <div>
                
            
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">Tên</span>
                <input type="text" 
                name='nqn_taskName' value={nqnTask.nqn_taskName} onChange={nqnHandlechange}
                className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon2"></input>
            </div>
            <div>
                
                
            </div>
            
            
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon4">Khóa</span>
                
                <select name='nqn_Level' value={nqnTask.nqn_Level} onChange={nqnHandlechange} className="form-control"
                    aria-describedby="basic-addon"> 
                    <option value={'K21'}>K21</option>
                    <option value={'K22'}>K22</option>
                    <option value={'K23'}>K23</option>
                </select>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">Lớp</span>
                <input type="text" 
                name='nqn_tasklop' value={nqnTask.nqn_tasklop} onChange={nqnHandlechange}
                className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon3"></input>
            </div>
            <button onClick={nqnHandleSubmit} className='btn btn-primary'>Ghi lai</button>
        </form>
    </div>
  )
}
