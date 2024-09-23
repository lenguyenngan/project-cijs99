import React from "react";

const FeaturedMovies = () => {
  return (
    <section className="relative p-8 text-white">
      <img
        src="../images/lionking.jpg"
        alt="Lion King"
        className="w-full h-96 object-cover rounded-lg shadow-lg"
      />
      <div className="absolute top-1/3 left-8 bg-black bg-opacity-50 p-4 rounded-lg">
        <h2 className="text-4xl font-bold mb-4">LION KING</h2>
        <p className="text-lg">
          Ở Pride Lands của Tanzania , một đàn sư tử thống trị vương quốc từ
          Pride Rock. Đứa con trai mới sinh của Vua Mufasa và Hoàng hậu Sarabi,
          Simba , được Rafiki, một con khỉ đầu chó , pháp sư và cố vấn của vương
          quốc , giới thiệu với các loài động vật đang tụ tập . Em trai của
          Mufasa, Scar , thèm muốn ngai vàng.
        </p>
        <div className="mt-4">
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg mr-2">
            <i className="fa fa-play"></i> Xem ngay
          </button>
          <button className="bg-white text-black py-2 px-4 rounded-lg">
            + Danh sách của tôi
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovies;
