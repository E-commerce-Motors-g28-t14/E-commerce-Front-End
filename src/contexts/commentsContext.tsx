import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { apiKmotorsService } from "../services";
import { CarsContext } from "./carsContext";


export interface IGetCommentResponse {
  id: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  user: IuserComment;
}

interface IuserComment {
  id: string;
  name: string;
  color: number;
}

interface iCommentProviderChildren {
  children: React.ReactNode;
}

interface iCommentProvider {
  newCommentValue: string;
  setNewCommentValue: Dispatch<SetStateAction<string>>;
  selectedCommentId: string;
  setSelectedCommentId: Dispatch<SetStateAction<string>>;
  deleteCommentId: string;
  setDeleteCommentId:Dispatch<SetStateAction<string>>;
  updateComment: (id: string, data: string) => void;
  deleteComment: (id: string) => void;
  getCommentByCarId: (id: string) => void;
  commentslist: IGetCommentResponse[];
  setCommentsList: Dispatch<SetStateAction<IGetCommentResponse[]>>;
  openModalCancel: boolean
  setOpenModalCancel:Dispatch<SetStateAction<boolean>>;
}

export const CommentContext = createContext({} as iCommentProvider);

export const CommentProvider = ({ children }: iCommentProviderChildren) => {

  const tokenUser = localStorage.getItem("@kmotors-g28");

  const [newCommentValue, setNewCommentValue] = useState<string>("");
  const [selectedCommentId, setSelectedCommentId] = useState<string>("");
  const [deleteCommentId, setDeleteCommentId] = useState<string>("");
  const [commentslist, setCommentsList] = useState<IGetCommentResponse[]>([]);
  const [openModalCancel, setOpenModalCancel] = useState<boolean>(false)

  const { selectCarID } = useContext(CarsContext);

 

  const getCommentByCarId = async (id: string) => {
    console.log("getCommentByCarId")
    await apiKmotorsService
    .get(`/comments/cars/${id}`, {
      headers: {},
    })
    .then((res) => {
      setCommentsList(res.data);     
    })
    .catch((err) => {
      console.log(err);
    }); 
    
  };

  const updateComment = async (id: string, data: string) => {  
    const update = {comment : data}
    try { 
      apiKmotorsService.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(tokenUser!)}`;     
      const response = await apiKmotorsService.patch(`/comments/${id}`, update,)       
      getCommentByCarId(selectCarID)
    
    } catch (err) {
      console.log(err);
    }
  };

  const deleteComment = async (id: string) => {
    try {
      apiKmotorsService.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(tokenUser!)}`;
      await apiKmotorsService.delete(`/comments/${id}`);
      getCommentByCarId(selectCarID)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CommentContext.Provider
      value={{
        getCommentByCarId,
        commentslist,
        setCommentsList,
        newCommentValue,
        setNewCommentValue,
        selectedCommentId,
        setSelectedCommentId,
        updateComment,
        deleteComment,
        openModalCancel, setOpenModalCancel, deleteCommentId, setDeleteCommentId,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};
