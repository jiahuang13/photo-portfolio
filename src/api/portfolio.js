import request from "@/utils/request";

// 獲取所有album
export const getAllAlbumAPI = () => {
  return request({
    url: "/album",
  });
};

// 獲取相簿
export const getAlbumAPI = (id) => {
  return request({
    url: `/album/${id}`,
  });
};

// 獲取設計
export const getAllDesignAPI = () => {
  return request({
    url: "/design",
  });
};
