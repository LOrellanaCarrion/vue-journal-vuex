export default {
  name: "daybook",
  path: "/daybook",
  component: () =>
    import(
      /* webpackChunkName: "DayBookLayout" */ "@/modules/daybook/layouts/DayBookLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "NoEntrySelected",
      component: () =>
        import(
          /* webpackChunkName: "NoEntrySelected" */ "@/modules/daybook/views/NoEntrySelected.vue"
        ),
    },
    {
      path: ":action/:id",
      name: "EntryView",
      component: () =>
        import(
          /* webpackChunkName: "NoEntrySelected" */ "@/modules/daybook/views/EntryView.vue"
        ),
    },
  ],
};
