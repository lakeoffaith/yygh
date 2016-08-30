export default {

    Main:{
        initialRoute: true,
        title:' ',
        selfToolbar:require('./components/mainToolbar').default,
        component:require('./hospital/list').default,
        children:{
            DepartmentList:{
                title:'成都军区医院',
                component:require('./department/list').default,
                children:{
                    DoctorList:{
                        title:'心血管内科',
                        component:require('./doctor/list').default,
                        children:{
                            DoctorShow:{
                                title:' ',
                                component:require('./doctor/show').default,
                                children:{
                                    SureYy:{
                                        title:'确认预约',
                                        component:require('./yy/sure').default
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    YyList:{
        title:'挂号预约列表',
        component:require('./yy/list').default
    },
    Login:{
      title:'登录页面',
      component:require('./login').Login
    }


}
