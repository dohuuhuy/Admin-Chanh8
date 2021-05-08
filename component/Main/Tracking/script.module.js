const listInteral = document.getElementById("listInteral");
const International = [
  {
    id: "",
    name: "Đã đến bưu cục gốc",
  },
  {
    id: "",
    name: "Qua biên giới",
  },
  {
    id: "",
    name: "Đã xóa thông quan",
  },
  {
    id: "",
    name: "Tổ chức hải quan",
  },
];

let htmlInteral = "";
International.map(({ id, name }, i) => {
  htmlInteral += `
            <li key=${i}>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="${id}"
                        checked>
                    <label class="form-check-label" for="flexCheckChecked">
                        ${name}
                    </label>
                </div>
            </li>`;
  return (listInteral.innerHTML = htmlInteral);
});

const listCar = document.getElementById("listCar");
const Car = [
  {
    id: "",
    name: "Đang chờ lấy hàng tại điểm phân phối",
  },
  {
    id: "",
    name: "Đã đến điểm phân phối",
  },
];

let htmlCar = "";
Car.map(({ id, name }, i) => {
  htmlCar += `
            <li key=${i}>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="${id}"
                        checked>
                    <label class="form-check-label" for="flexCheckChecked">
                        ${name}
                    </label>
                </div>
            </li>`;
  return (listCar.innerHTML = htmlCar);
});

const listMoney = document.getElementById("listMoney");
const Money = [
  {
    id: "",
    name: "Bưu kiện có thu tiền hộ",
  },
  {
    id: "",
    name: "Bưu kiện không tiền thu hộ",
  },
];

let htmlMoney = "";
Money.map(({ id, name }, i) => {
  htmlMoney += `
            <li key=${i}>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="${id}"
                        checked>
                    <label class="form-check-label" for="flexCheckChecked">
                        ${name}
                    </label>
                </div>
            </li>`;
  return (listMoney.innerHTML = htmlMoney);
});

const listStatus = document.getElementById("listStatus");
const Status = [
  {
    id: "",
    name: "Đã hủy",
  },
  {
    id: "",
    name: "Đang chờ lấy hàng",
  },
  {
    id: "",
    name: "Ninja Van đến lấy hàng",
  },
  {
    id: "",
    name: "Đến khu phân loại hàng",
  },
  {
    id: "",
    name: "Lấy hàng thất bại",
  },
  {
    id: "",
    name: "Đến nơi sắp xếp hàng",
  },
  {
    id: "",
    name: "Giữ lại",
  },
  {
    id: "",
    name: "Trên xe để giao hàng",
  },
  {
    id: "",
    name: "Đang chờ lên lịch lại",
  },
  {
    id: "",
    name: "Chuyển sang 3PL",
  },
  {
    id: "",
    name: "Trả lại cho người gửi",
  },
  {
    id: "",
    name: "Đã hoàn thành",
  },
];

let htmlStatus = "";
Status.map(({ id, name }, i) => {
  htmlStatus += `
            <li key=${i}>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="${id}"
                        checked>
                    <label class="form-check-label" for="flexCheckChecked">
                        ${name}
                    </label>
                </div>
            </li>`;
  return (listStatus.innerHTML = htmlStatus);
});

//  Cấu hình table

$(document).ready(function () {
  // inspired by http://jsfiddle.net/arunpjohny/564Lxosz/1/
  $(".table-responsive-stack").each(function (i) {
    var id = $(this).attr("id");
    //alert(id);
    $(this)
      .find("th")
      .each(function (i) {
        $("#" + id + " td:nth-child(" + (i + 1) + ")").prepend(
          '<span class="table-responsive-stack-thead">' +
            $(this).text() +
            ":</span> "
        );
        $(".table-responsive-stack-thead").hide();
      });
  });

  $(".table-responsive-stack").each(function () {
    var thCount = $(this).find("th").length;
    var rowGrow = 100 / thCount + "%";
    //console.log(rowGrow);
    $(this).find("th, td").css("flex-basis", rowGrow);
  });

  function flexTable() {
    if ($(window).width() <= 768) {
      $(".table-responsive-stack").each(function (i) {
        $(this).find(".table-responsive-stack-thead").show();
        $(this).find("thead").hide();
      });

      // window is less than 768px
    } else {
      $(".table-responsive-stack").each(function (i) {
        $(this).find(".table-responsive-stack-thead").hide();
        $(this).find("thead").show();
      });
    }
    // flextable
  }

  flexTable();

  window.onresize = function (event) {
    flexTable();
  };

  // document ready
});
