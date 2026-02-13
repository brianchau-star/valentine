import React from "react";

const LoveLetter: React.FC = () => {
  return (
    <div
      className="relative z-10 w-full max-w-2xl mx-auto animate-fade-in-up"
      style={{ animationDelay: "0.2s" }}
    >
      <div
        className="bg-valentine-letter-bg backdrop-blur-sm rounded-2xl px-6 py-7 sm:px-8 sm:py-9"
        style={{
          boxShadow:
            "0 20px 60px rgba(225, 29, 72, 0.08), 0 4px 16px rgba(0,0,0,0.04)",
        }}
      >
        {/* Letter heading */}
        <h1 className="font-dancing text-2xl sm:text-3xl font-bold text-valentine-primary text-left mb-1.5 leading-tight">
          Gửi Ngọc Ánh,
        </h1>

        {/* Letter content - hardcoded, user will customize */}
        <div className="font-dancing text-base sm:text-lg text-valentine-text leading-relaxed space-y-4">
          <p>
            Nhân dịp Valentine, anh muốn làm một điều gì đó thật đặc biệt dành
            tặng em, thế là anh đã tạo ra cái này hehe.
          </p>
          <p>
            Anh chỉ muốn nói anh thương Ngọc Ánh rất nhiều. Chúc em có một ngày
            Valentine vui vẻ và hy vọng em sẽ thích món quà "handmade" công nghệ
            này của anh.
          </p>
          <p>
            Cảm ơn em đã luôn đồng hành và ở bên anh. Anh biết nhiều lúc làm em
            buồn, cho anh xin lỗi nhé. Anh không giỏi nói lời hoa mỹ, nhưng anh
            muốn em biết rằng với anh, em là duy nhất và anh rất biết ơn vì có
            em trong cuộc đời.
          </p>
          <p className="text-right mt-6 text-valentine-primary">
            Yêu thương,
            <br />
            <span className="text-2xl sm:text-3xl">Anh Nhật</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;
