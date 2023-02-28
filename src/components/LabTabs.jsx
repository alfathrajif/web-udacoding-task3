import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Stack, styled } from "@mui/material";
import Comment from "./Comment";

const FullTabPanel = styled(TabPanel)({
  width: "100%",
  fontFamily: "Poppins",
});

const MyTab = styled(Tab)({
  textTransform: "none",
  fontFamily: "Poppins",
  fontWeight: 400,
  borderRadius: "0.25rem",
  transition: "300ms ease",
  margin: "0 5px",
  "&.Mui-selected": {
    color: "white",
  },
});

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TextSlice = () => {
    return (
      <Stack>
        <Stack mb={2}>
          {" "}
          Flutter Intermediate Training merupakan program belajar membuat
          aplikasi yang bisa berjalan di aplikasi android dan ios sekaligus.
          Dengan kursus ini peserta akan dapat membuat aplikasi mobile dengan
          mudah.
        </Stack>
        <Stack mb={2}>
          <h5 className="font-semibold">Target Peserta:</h5>
          <p>
            Training ini dapat diikuti oleh siapa saja yang sudah memiliki
            kemampuan dasar/basic programming flutter sebelumnya.
          </p>
        </Stack>
        <Stack mb={2}>
          <h5 className="font-semibold">Target Aplikasi:</h5>
          <p>
            Pada training ini peserta di targetkan untuk bisa membuat aplikasi
            yang bisa berjalan di perangkat android dan ios dengan mudah.
          </p>
        </Stack>
      </Stack>
    );
  };

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = React.useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? <TextSlice /> : text}
        <span
          onClick={toggleReadMore}
          className="font-semibold text-[#219653] cursor-pointer"
        >
          {isReadMore ? "...Baca Selengkapnya" : "Lebih Sedikit"}
        </span>
      </p>
    );
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box mb={3}>
          <TabList
            onChange={handleChange}
            fullWidth={true}
            centered
            aria-label="lab API tabs example"
          >
            <MyTab label="Information" value="1" />
            <MyTab label="Description" value="2" />
            <MyTab label={`Reviews (${3})`} value="3" />
          </TabList>
        </Box>
        <FullTabPanel value="1" className="border rounded font-light text-sm">
          <table>
            <tr>
              <td className="font-semibold w-36">Duration</td>
              <td>4 Hari (4 Jam)</td>
            </tr>
            <tr>
              <td className="font-semibold w-36">Fasilitas</td>
              <td>
                Ruangan Full AC, Snack, Makan Siang, Kaos Training, Buku
                Training, dan Ilmu Bermanfaat
              </td>
            </tr>
            <tr>
              <td className="font-semibold w-36">Persyaratan</td>
              <td className="">
                <p>
                  {" "}
                  Laptop baik Windows, Linux Ataupun Mac dengan RAM minimal 4GB.
                </p>{" "}
                <ul>
                  <li>
                    Software yang dibutuhkan : Android Studio
                    (https://developer.android.com/studio/)
                  </li>
                  <li>Flutter</li>
                  <li> Big Nox App Player (https://id.bignox.com/)</li>
                </ul>
              </td>
            </tr>
          </table>
        </FullTabPanel>
        <FullTabPanel value="2" className="border rounded font-light text-sm">
          <ReadMore>
            <TextSlice />
            <Stack>
              <Stack mb={2}>
                <h5 className="font-semibold">
                  Materi yang akan di pelajari adalah:
                </h5>
                <p>Flutter Bloc Library Pattern</p>
                <ul className="list-disc ml-8">
                  <li>Pengenalan Apa itu Flutter Bloc Library Pattern</li>
                  <li>Implementasi bloc library pattern</li>
                </ul>
              </Stack>
              <Stack mb={2}>
                <h5 className="font-semibold">
                  Layouting (support multi device/screen size)
                </h5>
                <ul className="list-disc ml-8">
                  <li>Support aplikasi ke multi device dan multi screen</li>
                </ul>
              </Stack>
              <Stack mb={2}>
                <h5 className="font-semibold">
                  CRUD (database) SQFLite Pegawai
                </h5>
                <ul className="list-disc ml-8">
                  <li>Membuat Aplikasi CRUD untuk Pegawai</li>
                </ul>
              </Stack>
              <Stack mb={2}>
                <h5 className="font-semibold">Services (API) + passing data</h5>
                <ul className="list-disc ml-8">
                  <li>
                    Pembuatan web services api untuk aplikasi CRUD pegawai
                  </li>
                  <li>Webservice menggunakan Laravel</li>
                  <li>Parsing data dari webservices ke aplikasi flutter</li>
                </ul>
              </Stack>
              <Stack mb={2}>
                <h5 className="font-semibold">State management (framework)</h5>
                <ul className="list-disc ml-8">
                  <li>Apa itu state management</li>
                  <li>Contoh implementasi state management</li>
                </ul>
              </Stack>
              <Stack mb={2}>
                <h5 className="font-semibold">
                  Device hardware access (camera / location)
                </h5>
                <ul className="list-disc ml-8">
                  <li>Pengenalan</li>
                  <li>Access hardware / device menggunakan aplikasi Flutter</li>
                </ul>
              </Stack>
              <Stack mb={2}>
                <h5 className="font-semibold">Google Maps</h5>
                <ul className="list-disc ml-8">
                  <li>Implementasi google maps pada flutter</li>
                </ul>
              </Stack>
              <Stack mb={2}>
                <h5 className="font-semibold">Options:</h5>
                <p>
                  Apabila ingin mengganti CRUD data base dengan Firebase :
                  Firebase untuk Flutter :
                </p>
                <ul className="list-disc ml-8">
                  <li>Pengenalan</li>
                  <li>Setup firebase untuk flutter</li>
                  <li>Membuat firebase project</li>
                  <li>Membuat cloud firestore data base</li>
                  <li>Menghubungkan firestore data base ke flutter</li>
                  <li>Menggunakan Cloud Firestore Transaction</li>
                </ul>
              </Stack>
            </Stack>
          </ReadMore>
        </FullTabPanel>
        <FullTabPanel value="3" className="border rounded font-light text-sm">
          <Stack spacing={3}>
            <Comment />
            <Comment />
            <Comment />
          </Stack>
        </FullTabPanel>
      </TabContext>
    </Box>
  );
}
