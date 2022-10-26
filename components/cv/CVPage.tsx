import React from "react";
import style from "./Cv.module.scss";
import { ProgressBar, Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { zoomPlugin } from "@react-pdf-viewer/zoom";


export default function CVPage() {
  const characterMap: any = {
    isCompressed: true,
    // The url has to end with "/"
    url: "https://unpkg.com/pdfjs-dist@2.6.347/cmaps/",
  };
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const zoomPluginInstance = zoomPlugin();

  const { Zoom } = zoomPluginInstance;

  return (
    <div className={style.cv_container}>
      <h1 className={style.cv_title}>Sumit CV</h1>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
        <div className={style.pdf_viewer}>
          <Viewer
            defaultScale={1.0}
            renderLoader={(percentages: number) => (
              <div style={{ width: "100%" }}>
                <ProgressBar progress={Math.round(percentages)} />
              </div>
            )}
            characterMap={characterMap}
            fileUrl="../../sumit_cv.pdf"
            plugins={[defaultLayoutPluginInstance, zoomPluginInstance]}
          />
        </div>
      </Worker>
    </div>
  );
}
