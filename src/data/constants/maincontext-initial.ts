import { IBaseModal } from "../models/base-modal";

const loadingModalRef: React.RefObject<IBaseModal | null> = { current: null };
const isLoading = false;
const setIsLoading: React.Dispatch<React.SetStateAction<boolean>> = () => {};

export const MAINCONTEXT_INITIAL = { loadingModalRef, isLoading, setIsLoading };
