import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
const useTypedDispatch = () => useDispatch<AppDispatch>

// 타입스크립트에서 타입을 추론하지 못하면 개발자가 타입을 지정해줘야 함 annotate
const logger = useTypedSelector(state => state.logger); 


// const dispatch = useDispatch();

