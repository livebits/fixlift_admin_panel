export default {
    ra: {
        action: {
            add_filter: 'اضافه‌کردن فیلتر',
            add: 'اضافه',
            back: 'بازگشت',
            bulk_actions: '۱ آیتم انتخاب شد |||| %{smart_count} عدد از آیتم‌ها انتخاب شدند',
            cancel: 'انصراف',
            clear_input_value: 'پاک‌کردن مقدار',
            clone: 'شبیه‌سازی',
            confirm: 'تایید',
            create: 'ایجاد',
            delete: 'حذف',
            edit: 'ویرایش',
            export: 'دریافت خروجی',
            list: 'لیست',
            refresh: 'بروز‌رسانی',
            remove_filter: 'حذف این فیلتر',
            remove: 'حذف',
            save: 'ذخیره',
            search: 'جست‌وجو',
            show: 'نمایش',
            sort: 'مرتب‌سازی',
            undo: 'لغو',
        },
        boolean: {
            true: 'بله',
            false: 'خیر',
        },
        page: {
            create: 'ایجاد %{name}',
            dashboard: 'داشبورد',
            edit: '%{name} #%{id}',
            error: 'مشکلی ایجاد شد',
            list: 'لیست %{name}',
            loading: 'در حال بارگزاری',
            not_found: 'پیدا نشد',
            show: '%{name} #%{id}',
        },
        input: {
            file: {
                upload_several: 'تعدادی فایل برای آپلود دراپ کنید، یا برای انتخاب آن‌ها کلیک کنید.',
                upload_single: 'فایلی را برای آپلود دراپ کنید، یا برای انتخاب آن کلیک کنید',
            },
            image: {
                upload_several: 'تعدادی عکس برای آپلود دراپ کنید، یا برای انتخاب آن‌ها کلیک کنید.',
                upload_single: 'عکسی را برای آپلود دراپ کنید، یا برای انتخاب آن کلیک کنید',
            },
            references: {
                all_missing: 'امکان پیدا کردن اطلاعات ارجاعی وجود ندارد.',
                many_missing: 'حداقل یکی از مراجع در دسترس نیست.',
                single_missing: 'مرجع مورد نظر در دسترس نیست.',
            },
        },
        message: {
            about: 'درباره',
            are_you_sure: 'آیا اطمینان دارید ؟',
            bulk_delete_content:
                'آیا از حذف  %{name} اطمینان دارید؟ |||| آیا از حدف %{smart_count} عدد از آیتم‌ها اطمینان دارید؟',
            bulk_delete_title: 'حذف %{name} |||| حذف %{smart_count} عدد از آیتم‌های %{name}',
            delete_content: 'آیا از حذف این آیتم اطمینان دارید؟',
            delete_title: 'حذف %{name} #%{id}',
            details: 'جزییات',
            error: "خطایی در مرورگر رخ داد. درخواست شما کامل نشد",
            invalid_form: 'فرم درست پر نشده است. لطفا خطاها را بررسی کنید',
            loading: 'صفحه در حال بارگزاری است، چند لحظه صبر کنید',
            no: 'خیر',
            not_found: 'شما یک نشانی اینترنتی اشتباه تایپ کردید یا پیغام بدی را دنبال کردید.',
            yes: 'بله',
        },
        navigation: {
            no_results: 'نتیجه‌ای پیدا نشد',
            no_more_results: 'شماره صفحه‌ی %{page} خارج از محدوده مجاز است. صفحه قبل را امتحان کنید.',
            page_out_of_boundaries: 'شماره صفحه %{page} خارج از محدوده است',
            page_out_from_end: 'نمی‌توان به بعد از صفحه آخر رفت',
            page_out_from_begin: 'نمی‌توان به قبل از صفحه اول رفت',
            page_range_info: '%{offsetBegin}-%{offsetEnd} (کل: %{total})',
            page_rows_per_page: 'تعداد ردیف‌ها در صفحه:',
            next: 'بعدی',
            prev: 'قبلی',
        },
        auth: {
            user_menu: 'پروفایل',
            username: 'نام‌کاربری',
            password: 'رمز عبور',
            sign_in: 'ورود',
            sign_in_error: 'شناسایی با شکست مواجه شد، دوباره تلاش کنید',
            logout: 'خروج',
        },
        notification: {
            updated: 'اطلاعات با موفقیت بروز‌رسانی شد',
            created: 'اطلاعات با موفقیت ثبت شد',
            deleted: 'مورد انتخاب شده حذف شد',
            bad_item: 'المان اشتباه',
            item_doesnt_exist: 'المان پیدا نشد',
            http_error: 'خطا در برقراری ارتباط با سرور',
            data_provider_error: 'خطا در دریافت اطلاعات',
            canceled: 'لغو شد',
            logged_out: 'نشست کاربری شما به پایان زسیده‌است، لطفا دوباره وصل شوید.',
        },
        validation: {
            required: 'اجباری',
            minLength: 'حداقل باید %{min} کارکتر باشد',
            maxLength: 'باید %{max} کارکتر یا کمتر باشد',
            minValue: 'حداقل باید %{min} باشد',
            maxValue: 'باید %{max} یا کمتر باشد',
            number: 'باید یک عدد باشد',
            uniqueUsername: 'این نام کاربری از قبل ثبت شده است',
            uniqueMobile: 'این موبایل از قبل ثبت شده است',
            email: 'باید یک آدرس ایمیل صحیح باشد',
            oneOf: 'باید انتخابی از این گزینه‌ها باشد: %{options}',
            regex: 'باید با فرمت خاصی هماهنگ باشد (regexp): %{pattern}',
        },
        login: {
            'unprocessable_entity': 'اطلاعات را به درستی وارد کنید',
            'not_found': 'کاربری با مشخصات وارد شده پیدا نشد.',
        },
        menu: {
            dashboard: 'داشبورد',
            company_dashboard: 'داشبورد شرکت',
            users_mgmt: 'مدیریت کاربران',
            users_list: 'لیست کاربران',
            add_user: 'افزودن کاربر',
            companies_mgmt: 'مدیریت شرکت ها',
            companies_list: 'لیست شرکت ها',
            add_company: 'افزودن شرکت',
            roles: 'مدیریت نقش ها',
            settings: 'تنظیمات',
            public_settings: 'تنظیمات کلی',
            device_types: ' دستگاه ها',
            lift_field_categories: 'دسته بندی قطعات آسانسور',
            lift_fields: 'فیلدهای دسته بندی',
            message_templates: 'قالب پیامک',
            message_templates_settings: 'تنظیمات قالب پیامکی',
            segments: 'قطعات',
            deal_template: 'فرم قرارداد',
            service_users: 'سرویس کارها',
            regions: 'منطقه ها',
            checklists_cats: 'دسته بندی چک لیست',
            checklists: 'چک لیست',
            units: 'واحدها',
            password: 'تغییر رمز',
            deals_mgmt: 'مدیریت قراردادها',
            deals_list: 'قراردادها',
            add_deal: 'قرارداد جدید',
            deals_archive: 'تاریخچه',
            customers_mgmt: 'مدیریت مشتریان',
            customers_list: 'مشتریان',
            add_customer: 'مشتری جدید',
            services_mgmt: 'مدیریت سرویس ها',
            services_list: 'سرویس ها',
            add_service: 'ثبت سرویس',
            damages_mgmt: 'مدیریت خرابی ها',
            damages_list: 'خرابی ها',
            add_damage: 'ثبت خرابی',
            emergencies_mgmt: 'امداد',
            emergencies_list: 'لیست امداد',
            add_emergency: 'ثبت امداد',
            schedules: 'زمانبندی',
            financials_mgmt: 'مالی',
            financials_list: 'پرداخت ها',
        },
        company: {
            general: 'اطلاعات کلی',
            contact: 'اطلاعات تماس',
            user: 'اطلاعات کاربری',
        },
        customer: {
            general: 'اطلاعات کلی',
            user: 'اطلاعات کاربری',
        },
        deal: {
            selectCustomer: 'انتخاب مشتری',
            selectServiceUser: 'انتخاب سرویس کار',
            dealInfo: 'اطلاعات قرارداد',
            insurance: 'مبلغ و بیمه',
            liftId: 'اطلاعات آسانسور',
            location: 'موقعیت آسانسور',
        },
    },
};

