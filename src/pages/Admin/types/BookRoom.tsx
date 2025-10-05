type BookingForm = {
  maPhong: number;
  ngayDen: string; 
  ngayDi: string;
  soLuongKhach: number;
  maNguoiDung: number;
};

type Booking = BookingForm & {
  id: number;
};
