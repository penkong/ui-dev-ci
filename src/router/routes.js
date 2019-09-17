const routes = [{
        path: "/",
        component: () =>
            import ("layouts/Login.vue"),
        children: [{
            path: "",
            component: () =>
                import ("pages/LoginPage.vue")
        }]
    },
    {
        path: "/ci",
        component: () =>
            import ("layouts/CiLayout.vue"),
        children: [{
            path: "",
            component: () =>
                import ("pages/CiPage.vue")
        }]
    }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
    routes.push({
        path: "*",
        component: () =>
            import ("pages/LoginPage.vue")
    });
}

export default routes;