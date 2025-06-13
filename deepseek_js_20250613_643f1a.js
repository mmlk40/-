// متغيرات لتخزين بيانات الصور
let companyLogoData = null;
let propertyImageData = null;

// معالجة رفع شعار الشركة
document.getElementById('companyLogoUpload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        document.getElementById('companyLogoName').textContent = file.name;
        const reader = new FileReader();
        reader.onload = function(event) {
            companyLogoData = event.target.result;
            
            // إنشاء صورة لمعرفة أبعادها الأصلية
            const img = new Image();
            img.onload = function() {
                document.getElementById('companyLogoPreview').src = companyLogoData;
                document.getElementById('companyLogoPreview').style.display = 'block';
            };
            img.src = companyLogoData;
        };
        reader.readAsDataURL(file);
    }
});

// معالجة رفع صورة العقار
document.getElementById('propertyImageUpload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        document.getElementById('propertyImageName').textContent = file.name;
        const reader = new FileReader();
        reader.onload = function(event) {
            propertyImageData = event.target.result;
            document.getElementById('propertyImagePreview').src = propertyImageData;
            document.getElementById('propertyImagePreview').style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

// معالجة ألوان التصميم
const bgColorPicker = document.getElementById('bgColorPicker');
const textColorPicker = document.getElementById('textColorPicker');
const primaryColorPicker = document.getElementById('primaryColorPicker');
const themePresets = document.querySelectorAll('.theme-preset');
const designOptions = document.querySelectorAll('.design-option');

// تحديث قيم الألوان عند التغيير
bgColorPicker.addEventListener('input', function() {
    document.getElementById('bgColorValue').value = this.value;
});

textColorPicker.addEventListener('input', function() {
    document.getElementById('textColorValue').value = this.value;
});

primaryColorPicker.addEventListener('input', function() {
    document.getElementById('primaryColorValue').value = this.value;
});

// تطبيق القوالب الجاهزة
themePresets.forEach(preset => {
    preset.addEventListener('click', function() {
        // إزالة التنشيط من جميع القوالب
        themePresets.forEach(p => p.classList.remove('active'));
        // تنشيط القالب المحدد
        this.classList.add('active');
        
        // تطبيق الألوان
        const bgColor = this.getAttribute('data-bg');
        const textColor = this.getAttribute('data-text');
        const primaryColor = this.getAttribute('data-primary');
        
        document.getElementById('bgColorValue').value = bgColor;
        document.getElementById('bgColorPicker').value = bgColor;
        document.getElementById('textColorValue').value = textColor;
        document.getElementById('textColorPicker').value = textColor;
        document.getElementById('primaryColorValue').value = primaryColor;
        document.getElementById('primaryColorPicker').value = primaryColor;
    });
});

// تطبيق التصاميم الجاهزة
designOptions.forEach(option => {
    option.addEventListener('click', function() {
        // إزالة التنشيط من جميع التصاميم
        designOptions.forEach(o => o.classList.remove('active'));
        // تنشيط التصميم المحدد
        this.classList.add('active');
        
        // تطبيق التصميم المحدد
        const design = this.getAttribute('data-design');
        applyDesignTemplate(design);
    });
});

// تطبيق قالب التصميم المحدد
function applyDesignTemplate(design) {
    let bgColor, textColor, primaryColor;
    
    switch(design) {
        case '1': // كلاسيكي
            bgColor = '#ffffff';
            textColor = '#333333';
            primaryColor = '#3498db';
            break;
        case '2': // أزرق
            bgColor = '#f5f9ff';
            textColor = '#333333';
            primaryColor = '#3498db';
            break;
        case '3': // أخضر
            bgColor = '#f5fff5';
            textColor = '#333333';
            primaryColor = '#2ecc71';
            break;
        case '4': // أحمر
            bgColor = '#fff5f5';
            textColor = '#333333';
            primaryColor = '#e74c3c';
            break;
        case '5': // بنفسجي
            bgColor = '#f9f5ff';
            textColor = '#333333';
            primaryColor = '#9b59b6';
            break;
        default:
            bgColor = '#ffffff';
            textColor = '#333333';
            primaryColor = '#3498db';
    }
    
    document.getElementById('bgColorValue').value = bgColor;
    document.getElementById('bgColorPicker').value = bgColor;
    document.getElementById('textColorValue').value = textColor;
    document.getElementById('textColorPicker').value = textColor;
    document.getElementById('primaryColorValue').value = primaryColor;
    document.getElementById('primaryColorPicker').value = primaryColor;
    
    // تغيير كلاس التصميم للإعلان
    const adElement = document.getElementById('advertisement');
    designOptions.forEach((option, index) => {
        adElement.classList.remove(`design-${index + 1}`);
    });
    adElement.classList.add(`design-${design}`);
    
    // إزالة التنشيط من جميع القوالب
    themePresets.forEach(p => p.classList.remove('active'));
}

// إنشاء الإعلان
document.getElementById('generateBtn').addEventListener('click', function() {
    // جمع البيانات من النموذج
    const companyName = document.getElementById('companyName').value || 'شركة عقارية';
    const propertyType = document.getElementById('propertyType').value;
    const propertyArea = document.getElementById('propertyArea').value;
    const propertyPrice = document.getElementById('propertyPrice').value;
    const propertyRooms = document.getElementById('propertyRooms').value;
    const propertyBaths = document.getElementById('propertyBaths').value;
    const propertyLocation = document.getElementById('propertyLocation').value;
    const propertyDescription = document.getElementById('propertyDescription').value;
    const contactPhone = document.getElementById('contactPhone').value;
    const contactWhatsapp = document.getElementById('contactWhatsapp').value;
    const contactEmail = document.getElementById('contactEmail').value;
    const licenseNumber = document.getElementById('licenseNumber').value;
    const adLicense = document.getElementById('adLicense').value;
    const contractNumber = document.getElementById('contractNumber').value;
    
    // جمع ألوان التصميم
    const bgColor = document.getElementById('bgColorPicker').value;
    const textColor = document.getElementById('textColorPicker').value;
    const primaryColor = document.getElementById('primaryColorPicker').value;

    // تطبيق الألوان على الإعلان
    document.getElementById('advertisement').style.setProperty('--ad-background', bgColor);
    document.getElementById('advertisement').style.setProperty('--ad-text-color', textColor);
    document.getElementById('advertisement').style.setProperty('--ad-primary-color', primaryColor);

    // تعبئة الإعلان بالبيانات
    const adLogo = document.getElementById('adLogo');
    adLogo.src = companyLogoData || 'https://via.placeholder.com/150x80?text=شعار+الشركة';
    adLogo.style.maxWidth = '150px';
    adLogo.style.maxHeight = '80px';
    adLogo.style.width = 'auto';
    adLogo.style.height = 'auto';
    
    document.getElementById('adCompanyName').textContent = companyName;
    document.getElementById('adPropertyImage').src = propertyImageData || 'https://via.placeholder.com/375x200?text=صورة+العقار';
    
    // إظهار/إخفاء العناصر حسب توفر البيانات
    updateAdElement('adType', propertyType);
    updateAdElement('adArea', propertyArea, ' م²');
    updateAdElement('adPrice', propertyPrice);
    updateAdElement('adRooms', propertyRooms);
    updateAdElement('adBaths', propertyBaths);
    updateAdElement('adLocation', propertyLocation);
    updateAdElement('adDescription', propertyDescription);
    updateAdElement('adPhone', contactPhone);
    
    // معلومات الاتصال الإضافية
    updateContactElement('adWhatsapp', contactWhatsapp, 'واتساب: ');
    updateContactElement('adEmail', contactEmail, 'البريد: ');
    
    // المعلومات القانونية
    updateLicenseElement('adLicenseNumber', licenseNumber, 'رخصة: ');
    updateLicenseElement('adAdLicense', adLicense, 'ترخيص إعلاني: ');
    updateLicenseElement('adContractNumber', contractNumber, 'عقد وساطة: ');

    // عرض الإعلان
    document.getElementById('advertisement').classList.remove('hidden');

    // إنشاء الصورة من الإعلان
    setTimeout(() => {
        html2canvas(document.getElementById('advertisement')).then(canvas => {
            const image = canvas.toDataURL('image/png');
            document.getElementById('resultImage').src = image;
            document.getElementById('previewContainer').classList.remove('hidden');
            
            // حفظ الصورة عند النقر على زر الحفظ
            document.getElementById('downloadBtn').addEventListener('click', function() {
                const link = document.createElement('a');
                link.download = 'إعلان-عقاري-' + Date.now() + '.png';
                link.href = image;
                link.click();
            });
        });
    }, 500);
});

// دالة لتحديث عناصر الإعلان مع التحقق من وجود القيمة
function updateAdElement(elementId, value, suffix = '') {
    const element = document.getElementById(elementId);
    if (value) {
        element.textContent = value + suffix;
        element.parentElement.classList.remove('hidden');
    } else {
        element.parentElement.classList.add('hidden');
    }
}

// دالة لتحديث عناصر الاتصال مع التحقق من وجود القيمة
function updateContactElement(elementId, value, prefix = '') {
    const element = document.getElementById(elementId);
    if (value) {
        element.querySelector('span').textContent = value;
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}

// دالة لتحديث العناصر القانونية مع التحقق من وجود القيمة
function updateLicenseElement(elementId, value, prefix = '') {
    const element = document.getElementById(elementId);
    if (value) {
        element.querySelector('span').textContent = value;
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}

// زر إنشاء إعلان جديد
document.getElementById('newAdBtn').addEventListener('click', function() {
    document.getElementById('previewContainer').classList.add('hidden');
    document.getElementById('advertisement').classList.add('hidden');
    window.scrollTo(0, 0);
});