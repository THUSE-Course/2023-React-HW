import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BoardScreen from "./BoardScreen";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BoardScreen />
    },
    {
        path: "/:boardId",
        element: <BoardScreen />
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
