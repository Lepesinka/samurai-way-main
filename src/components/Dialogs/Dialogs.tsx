import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props:any) => {
    let path = "/dialogs/" + props.id
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
const Message = (props:any) => {
    return <div className={s.dialog}>{props.message}</div>
}
const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Kate" id="1" />
                <DialogItem name="Boleslav" id="2" />
                <DialogItem name="Marianna" id="3" />
                <DialogItem name="Epifan" id="4" />
                <DialogItem name="Yuri" id="5" />
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How is your it-kamasutra?"/>
                <Message message="Yo"/>
            </div>
        </div>


    )
}
export default Dialogs;