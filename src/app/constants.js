import {selectModalPredicatoVerbale} from "../features/modalSlice";
import {useSelector} from "react-redux";

export const ShowModalPredicatoVerbale = () => (
    useSelector(selectModalPredicatoVerbale)
)