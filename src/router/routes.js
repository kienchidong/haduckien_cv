/* layouts */
import MasterLayout from "../layouts/MasterLayout";

/* pages*/
import ContentCv from "../pages/ContentCv";

const routes = [
    {
        path: "/",
        component: MasterLayout,
        redirect: "/ha-duc-kien-cv.html",
        meta: {mustLogin: true},
        children: [
            {
                path: "/ha-duc-kien-cv.html",
                name: "Index ",
                component: ContentCv,
                meta: {permissions: "all"}
            },
        ]
    }
];

export default routes;
