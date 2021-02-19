---
title: "Command Windows 10"
category: ["Windows 10", "jijk"]
tags: command
---

Nếu bạn là một lập trình viên thì việc thao tác thành thạo các phím tắt, sử dụng `cmd` sẽ rút ngắn 1 khoảng thời gian nhất định và tăng năng suất trong công việc.

***

<details>
    <summary><strong>Mục lục.</strong></summary>

* [Thao tác dọn sạch, thoát cmd.](#thaotacdonsach)
* [Thao tác trên thư mục.](#thaotactrenthumuc)
* [Thao tác xử lý thuột tính cho file hoặc thư mục.](#thaotacxulythuoctinh)
* [Thao tác kiểm tra thông tin host, địa chỉ IP, DNS,....](#thaotackiemtrathongtin)
* [Thao tác tắt máy.](#thaotactatmay)
* [Thao tác tắt phần mềm.](#thaotactatphanmem)


</details>

***
## <kbd>Windows</kbd>

### Thao tác dọn sạch, thoát cmd<a name="thaotacdonsach"></a>
* `cls` : Xóa lệnh
* `exit` : Thoát khỏi cmd

### Thao tác trên thư mục<a name="thaotactrenthumuc"></a>
* `rd/s /q <folder>` : Xóa rỗng 100%, không cần hỏi
* `cd..` : Trở về
* `cd <folder>` : Chọn
* `dir` : Xem tên thư mục bên trong
* `mkdir` : Tạo folder
* `md` : Tương tự như mkdir
* `copy <file-copy> <file-paste> /y` : Copy từ file này sang file khác không cần phải hỏi
* `copy nul <file>` : Tạo file
* `tree/f` : Xem cây thư mục
* `ren <name> <name new>` : Đổi tên

### Thao tác xử lý thuột tính cho file hoặc thư mục<a name="thaotacxulythuoctinh"></a>
* `attrib (+/-)a (+/-)s (+/-)h (+/-)r <file/>folder> /s /d`
  * `(+/-)` : Thêm/loại bỏ thuộc tính
  * `a` : (archive) -> lưu trữ
  * `s` : (system) -> hệ thống
  * `h` : (hidden) -> ẩn
  * `r` : (read-only) -> chỉ đọc
  * `/s` : Thực hiện tất cả bên trong nó
  * `/h` : Đặt thuộc tính tất cả bên trong nó

### Thao tác kiểm tra thông tin host, địa chỉ IP, DNS,...<a name="thaotackiemtrathongtin"></a>
* `tasklist` : Xem tiến trình chương trình
* `driverquery` : Xem các driver đã cài trong máy
* `systeminfo` : Xem thông tin hệ thống
* `ipconfig/all` : Xem thông tin mạng

### Thao tác tắt máy<a name="thaotactatmay"></a>
* `Shutdown -s -t [1200]` : Shutdown -shutdown -time [1200/60]s
* `Shutdown -r -t [1200]` : Shutdown -restart -time [1200/60]s

### Thao tác tắt phần mềm<a name="thaotactatphanmem"></a>
* `taskkill/f /im <name-application>.exe` : Tắt trong tường hợp khi không thể thoát trực tiếp

***