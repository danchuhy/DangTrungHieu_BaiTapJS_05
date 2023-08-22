// BÀI TẬP VỀ NHÀ 01 - QUẢN LÝ TUYỂN SINH
function Submit_01(){

    // B1: Xác định đầu vào
    // - Điểm chuẩn 
    // - Điểm môn 1, điểm môn 2, điểm môn 3
    // - Khu vực
    // - Đối tượng

    var diemChuan = +document.getElementById('diemChuan').value;
    var diemMon1 = +document.getElementById('diemMon1').value;
    var diemMon2 = +document.getElementById('diemMon2').value;
    var diemMon3 = +document.getElementById('diemMon3').value;
    var khuVuc = document.getElementById('khuVuc').value;
    var doiTuong = document.getElementById('doiTuong').value;

    var diemKhuVuc = 0;
    var diemDoiTuong = 0;

    var dau;
    var diemTong;
    
    // B2: Công thức diemTong = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong
    switch (khuVuc){
        case "A (+2.0đ)": diemKhuVuc = 2; break;
        case "B (+1.0đ)": diemKhuVuc = 1; break;
        case "C (+0.5đ)": diemKhuVuc = .5; break;
        case "X (Không có)": diemKhuVuc = 0; break;
    }

    switch (doiTuong){
        case "1 (+2.5đ)": diemDoiTuong = 2.5; break;
        case "2 (+1.5đ)": diemDoiTuong = 1.5; break;
        case "3 (+1.0đ)": diemDoiTuong = 1; break;
        case "0 (Không có)": diemDoiTuong = 0; break;
    }

    if (diemMon1 > 10 || diemMon2 > 10 || diemMon3 > 10){
        var error1A = true;
    }

    diemTong = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong;

    if (diemTong >= diemChuan && diemMon1*diemMon2*diemMon3 != 0){dau = true}
    else {dau = false;}
    if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0){
        var liet = true;
    }
    // B3: In kết quả đầu ra
    if (error1A == true){
        document.getElementById('result_01').innerHTML = `
        <div class ="result error">
            Điểm là số từ 0-10, vui lòng nhập lại!
        </div>`
        return;
    } 
    if (dau == true){
        document.getElementById('result_01').innerHTML = `
        <div class ="result">
            Tổng điểm: <b> ${diemTong} </b> <br>
            Kết quả: <b>Đậu</b> <br>
            Chúc mừng!
        </div>`
    }
    if (dau != true && liet != true){
        document.getElementById('result_01').innerHTML = `
        <div class ="result">
            Tổng điểm: <b> ${diemTong} </b> <br>
            Kết quả: <b>Trượt</b> <br>
            Lý do: Tổng điểm không đủ
        </div>`
    }
    if (dau != true && liet == true){
        document.getElementById('result_01').innerHTML = `
        <div class ="result">
            Tổng điểm: <b> ${diemTong} </b> <br>
            Kết quả: <b>Trượt</b> <br>
            Lý do: Bị liệt môn
        </div>`
    }

};


// BÀI TẬP VỀ NHÀ 02 - TÍNH TIỀN ĐIỆN

function Submit_02(){
    // B1: Xác định đầu vào
    // - Số Kw điện tiêu thụ
    var dienTieuThu = +document.getElementById('dienTieuThu').value;
    var tienDien;

    // B2: Tính theo bậc thang
    // - tienDien = dienTieuThu*500; (dienTieuThu <= 50)
    // - tienDien = 25000 + (dienTieuThu-50)*650 (dienTieuThu <= 100)
    // - tienDien = 57500 + (dienTieuThu-100)*850 (dienTieuThu <= 200)
    // - tienDien = 142500 + (dienTieuThu-200)*1100 (dienTieuThu <= 350)
    // - tienDien = 307500 + (dienTieuThu-350)*1300 (dienTieuThu > 350)
    if (dienTieuThu < 0){
        var error2 = true;
    } else
    if (dienTieuThu <= 50){
        tienDien = dienTieuThu*500;
    } else
    if (dienTieuThu <= 100){
        tienDien = 25000 + (dienTieuThu-50)*650; 
    } else
    if (dienTieuThu <= 200){
        tienDien = 57500 + (dienTieuThu-100)*850;
    } else
    if (dienTieuThu <= 350){
        tienDien = 142500 + (dienTieuThu-200)*1100;
    } else {
        tienDien = 307500 + (dienTieuThu-350)*1300;
    }
    tienDien  = new Intl.NumberFormat('ja-JP').format(tienDien);


    // B3: In kết quả đầu ra
    if (error2 == true){
        document.getElementById('result_02').innerHTML = `
        <div class ="result error">
            Số KW không thể là số âm. Vui lòng nhập lại!
        </div>`
    } else {
        document.getElementById('result_02').innerHTML = `
        <div class ="result">
            Số tiền điện phải thanh toán <b>${tienDien}đ</b>
        </div>`
    }

}



// BÀI TẬP VỀ NHÀ 03 - TÍNH THUẾ THU NHẬP
function Submit_03(){

    // B1: Xác định đầu vào
    // - Họ và tên 
    // - Thu nhập năm
    // - Số người phụ thuộc
    var hoVaTen3 = document.getElementById('hoVaTen3').value;
    var thuNhapNam = +document.getElementById('thuNhapNam').value;
    var SoNguoiPhuThuoc = +document.getElementById('SoNguoiPhuThuoc').value;

    const MIEN_TRU_BAN_THAN = 4000000;
    const MIEN_TRU_PHU_THUOC = 1600000;

    var thuNhapChiuThue;
    var thueThuNhap;

    
    // B2: Công thức tính thuế TN
    // Thu nhâp chịu thuế = Thu nhập năm - 4tr -1tr6*[số người phụ thuộc]
    // Thuế TN sẽ áp dụng lên phần thu nhập chịu thuế theo bậc thang như bài trên
    
    thuNhapChiuThue = thuNhapNam - MIEN_TRU_BAN_THAN - MIEN_TRU_PHU_THUOC*SoNguoiPhuThuoc;

    if (thuNhapNam < 0){
        var error3 = true;
    } else
    if (thuNhapChiuThue <= 60e+6){
        thueThuNhap = thuNhapChiuThue*0.05;
    } else
    if (thuNhapChiuThue <= 120e+6){
        thueThuNhap = 3e+6 + (thuNhapChiuThue-60e+6)*0.10; 
    } else
    if (thuNhapChiuThue <= 210e+6){
        thueThuNhap = 9e+6 + (thuNhapChiuThue-120e+6)*0.15;
    } else
    if (thuNhapChiuThue <= 384e+6){
        thueThuNhap = 22.5e+6 + (thuNhapChiuThue-210e+6)*0.2;
    } else 
    if (thuNhapChiuThue <= 624e+6){
        thueThuNhap = 57.3e+6 + (thuNhapChiuThue-384e+6)*0.25;
    } else
    if (thuNhapChiuThue <= 960e+6){
        thueThuNhap = 117.3e+6 + (thuNhapChiuThue-624e+6)*0.3;
    } else{
        thueThuNhap = 218.1e+6 + (thuNhapChiuThue-960e+6)*0.35;
    };

    if (thueThuNhap < 0){
        thueThuNhap = 0;
    }

    thueThuNhap = new Intl.NumberFormat('ja-JP').format(thueThuNhap);

    
    // B3: In kết quả đầu ra
    if (error3 == true){
        document.getElementById('result_03').innerHTML = `
        <div class ="result error">
            Thu nhập năm không thể là số âm. Vui lòng nhập lại!
        </div>`
    } else {
        document.getElementById('result_03').innerHTML = `
        <div class ="result">
            Tên: <b>${hoVaTen3}</b< <br>
            Thuế thu nhập: <b>${thueThuNhap}đ</b>
        </div>`
    }

};


// BÀI TẬP VỀ NHÀ 04 - TÍNH TIỀN CÁP

// function ẩn / hiện field số kết nối
function doiLoaiKhach(){
    var loaiKhach = document.querySelector('input[name="loaiKhach"]:checked').value;
    var blockSoKetNoi = document.getElementById('blockSoKetNoi');
    var result_04 = document.getElementById('result_04');

    if (loaiKhach==="doanhNghiep"){
        blockSoKetNoi.classList.remove("d-none");
        result_04.classList.add("d-none")
    } else {
        blockSoKetNoi.classList.remove("d-none");
        blockSoKetNoi.classList.add("d-none");
        result_04.classList.add("d-none")
    }
}

function Submit_04(){
    // B1: Xác định đầu vào
    // - Loại khách
    // - Mã khách hàng
    // - Số kết nối
    // - Số kênh cao cấp
    var loaiKhach = document.querySelector('input[name="loaiKhach"]:checked').value;
    var maKhachHang = document.getElementById('maKhachHang').value;
    var soKetNoi = +document.getElementById('soKetNoi').value;
    var soKenhCaoCap = +document.getElementById('soKenhCaoCap').value;

    var tongTien4;
    // B2: Cách tính:
    // - Cá nhân: tongTien = 4.5 + 20.5 + 7.5*soKenhCaoCap
    // - Doanh Nghiệp: 
    //     + tongTien = 15 + 75 + (soKetNoi-10)*5 + 50*soKenhCaoCap; (soKetNoi > 10)
    //     + tongTien = 15 + 75 + 50*soKenhCaoCap (soKetNoi <= 10)

    if (soKetNoi < 0 || soKenhCaoCap < 0){
        var error4 = true;
    }

    switch (loaiKhach){
        case "caNhan":
            tongTien4 = 4.5 + 20.5 + 7.5*soKenhCaoCap;
            break;
        case "doanhNghiep":
            if (soKetNoi<=10){
                tongTien4 = 15 + 75 + 50*soKenhCaoCap;
            } else {
                tongTien4 = 15 + 75 + (soKetNoi-10)*5 + 50*soKenhCaoCap;
            }
            break;
    }


    // B3: In kết quả đầu ra
    if (error4 == true){
        document.getElementById('result_04').classList.remove("d-none")
        document.getElementById('result_04').innerHTML = `
        <div class ="result error">
            Thông tin nhập vào không thể là số âm. Xin nhập lại!
        </div>`
    } else {
        document.getElementById('result_04').classList.remove("d-none")
        document.getElementById('result_04').innerHTML = `
        <div class ="result">
            Mã khách hàng: <b>${maKhachHang} </b> <br>
            Tiền cáp: $<b>${tongTien4}</b>
        </div>`
    }

}

