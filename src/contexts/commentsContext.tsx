import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
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
  updateComment: (id: string, data: string) => void;
  deleteComment: (id: string) => void;

  getCommentByCarId: (id: string) => void;

  commentslist: IGetCommentResponse[];
  setCommentsList: Dispatch<SetStateAction<IGetCommentResponse[]>>;
}

export const CommentContext = createContext({} as iCommentProvider);

export const CommentProvider = ({ children }: iCommentProviderChildren) => {

  const tokenUser = localStorage.getItem("@kmotors-g28");

  const [newCommentValue, setNewCommentValue] = useState<string>("");
  const [selectedCommentId, setSelectedCommentId] = useState<string>("");
  const [commentslist, setCommentsList] = useState<IGetCommentResponse[]>([]);

 

  const getCommentByCarId = async (id: string) => {
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
    try {      
      const response =await apiKmotorsService.patch(`/comments/${id}`, data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(tokenUser!)}`,
        },
      }); 
      console.log(response.data)
    
    } catch (err) {
      console.log(err);
    }
  };

  const deleteComment = async (id: string) => {
    try {
      apiKmotorsService.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${tokenUser}`;
      await apiKmotorsService.delete(`/comments/${id}`);
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
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};
