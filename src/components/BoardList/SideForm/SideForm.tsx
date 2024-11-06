import React, { ChangeEvent, FC, useState } from 'react'
import { FiCheck } from 'react-icons/fi';
import { icon, input, sideForm } from './SideForm.css';
import { useTypedDispatch } from '../../../hooks/redux';
import { addBoard } from '../../../store/slices/boardsSlice';
import { v4 as uuidv4 } from 'uuid';
import { addLog } from '../../../store/slices/loggerSlice';

type TSideFormProps = {
	setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
	inputRef: React.RefObject<HTMLInputElement>
}

const SideForm: FC<TSideFormProps> = ({
	setIsFormOpen,
	inputRef
}) => {
	const [ inputText, setInputText ] = useState('')

	const dispatch = useTypedDispatch();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value);
	}

	const handelOnBlur = () => {
		setIsFormOpen(false);
	}

	const handelClick = () => {
		if(inputText) {
			dispatch(
				addBoard({ 
					board: {
						boardId: uuidv4(),
						boardName: inputText,
						lists: []
				}})
			)
			dispatch(
				addLog({
					logId: uuidv4(),
					logMessage: `게시판 등록: ${inputText}`,
					logAuth: "User",
					logTimestamp: String(Date.now())
				})
			)
		}
	}

	return (
		<div className={sideForm}>
			<input
				autoFocus
				className={input}
				type='text'
				placeholder='새로운 게시판 등록하기'
				value={inputText}
				onChange={handleChange}
				onBlur={handelOnBlur}
			/>
			<FiCheck className={icon} onMouseDown={handelClick}/>
		</div>
	)
}

export default SideForm
