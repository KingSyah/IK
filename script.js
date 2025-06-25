// Instruksi Kerja JavaScript Functions

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Setup logo upload functionality
    setupLogoUpload();

    // Setup print functionality
    setupPrintFunction();

    // Setup save functionality
    setupSaveFunction();

    // Setup auto-save
    setupAutoSave();

    // Add placeholder logo if none exists
    setupDefaultLogo();

    // Setup date input
    setupDateInput();

    // Setup JSON export/import
    setupJsonFunctions();
}

function setupLogoUpload() {
    const uploadBtn = document.getElementById('uploadLogo');
    const logoInput = document.getElementById('logoInput');
    const logoImg = document.getElementById('logo');
    
    uploadBtn.addEventListener('click', function() {
        logoInput.click();
    });
    
    logoInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                logoImg.src = e.target.result;
                logoImg.style.border = 'none';
                logoImg.style.background = 'none';
                showNotification('Logo berhasil diubah!');
            };
            reader.readAsDataURL(file);
        }
    });
}

function setupPrintFunction() {
    const printBtn = document.getElementById('printBtn');

    printBtn.addEventListener('click', function() {
        // Hide edit controls before printing
        const editControls = document.querySelector('.edit-controls');
        editControls.style.display = 'none';

        // Prepare logo for printing
        const logo = document.getElementById('logo');
        const originalBorder = logo.style.border;
        const originalBackground = logo.style.background;

        // If logo is placeholder, ensure it shows properly in print
        if (logo.src.includes('logo-placeholder') || logo.alt === 'Logo Placeholder') {
            logo.style.border = '1px solid #000';
            logo.style.background = 'white';
        }

        // Format date for print (Indonesian format)
        const dateInput = document.getElementById('documentDate');
        const originalDateType = dateInput.type;
        const dateValue = dateInput.value;

        if (dateValue) {
            // Convert to Indonesian date format for print
            const date = new Date(dateValue);
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timeZone: 'Asia/Jakarta'
            };
            const formattedDate = date.toLocaleDateString('id-ID', options);

            // Temporarily change to text input with formatted date
            dateInput.type = 'text';
            dateInput.value = formattedDate;
        }

        // Print the document
        window.print();

        // Restore original styles and date input after printing
        setTimeout(() => {
            editControls.style.display = 'flex';
            logo.style.border = originalBorder;
            logo.style.background = originalBackground;

            // Restore date input
            if (dateValue) {
                dateInput.type = originalDateType;
                dateInput.value = dateValue;
            }
        }, 1000);
    });
}

function setupSaveFunction() {
    const saveBtn = document.getElementById('saveBtn');

    saveBtn.addEventListener('click', function() {
        saveDocument(true); // true = show notification for manual save
    });
}

function saveDocument(showNotif = true) {
    const documentData = collectDocumentData();

    // Save to localStorage
    localStorage.setItem('instruksiKerjaData', JSON.stringify(documentData));

    // Only show notification if explicitly requested
    if (showNotif) {
        showNotification('Dokumen berhasil disimpan!');
    }

    // In a real application, you would send this data to a server
    console.log('Document saved:', documentData);
}

function collectDocumentData() {
    const data = {
        timestamp: new Date().toISOString(),
        institutionName: document.querySelector('.institution-name').textContent,
        institutionDetail1: document.querySelectorAll('.institution-detail')[0].textContent,
        institutionDetail2: document.querySelectorAll('.institution-detail')[1].textContent,
        mainTitle: document.querySelector('.main-title').textContent,
        subtitle: document.querySelector('.subtitle').textContent,
        kodeIK: document.querySelector('.code-input').value,
        nomorRevisi: document.querySelector('.revision-input').value,
        halaman: document.querySelector('.page-input').value,
        pengertian: document.querySelectorAll('.content-cell')[0].textContent,
        tujuan: document.querySelectorAll('.content-cell')[1].innerHTML,
        kebijakan: document.querySelectorAll('.content-cell')[2].textContent,
        prosedur: document.querySelectorAll('.content-cell')[3].innerHTML,
        unitTerkait: document.querySelectorAll('.content-cell')[4].textContent,
        // Signature data with new format
        instruktur: document.querySelectorAll('.signature-role')[0].textContent,
        namaInstruktur: document.querySelectorAll('.signature-name')[0].textContent,
        nipInstruktur: document.querySelectorAll('.signature-nip')[0].textContent,
        // Location and date
        lokasi: document.querySelector('.signature-location span').textContent,
        tanggal: document.getElementById('documentDate').value,
        // Ka Sub Unit Lab
        kaSubUnitLab: document.querySelectorAll('.signature-role')[1].textContent,
        namaKaSubUnit: document.querySelectorAll('.signature-name')[1].textContent,
        nipKaSubUnit: document.querySelectorAll('.signature-nip')[1].textContent,
        // Ketua Jurusan
        ketua: document.querySelectorAll('.signature-role')[2].textContent,
        namaKetua: document.querySelectorAll('.signature-name')[2].textContent,
        nipKetua: document.querySelectorAll('.signature-nip')[2].textContent,
        logo: document.getElementById('logo').src
    };

    return data;
}

function loadDocument() {
    const savedData = localStorage.getItem('instruksiKerjaData');

    if (savedData) {
        const data = JSON.parse(savedData);

        // Restore document content
        document.querySelector('.institution-name').textContent = data.institutionName || 'Jurusan Keperawatan';
        document.querySelectorAll('.institution-detail')[0].textContent = data.institutionDetail1 || 'Politekkes Semarang';
        document.querySelectorAll('.institution-detail')[1].textContent = data.institutionDetail2 || 'Prodi Tegal';
        document.querySelector('.main-title').textContent = data.mainTitle || 'INSTRUKSI KERJA';
        document.querySelector('.subtitle').textContent = data.subtitle || 'Pemeliharaan Nebulizer';
        document.querySelector('.code-input').value = data.kodeIK || '';
        document.querySelector('.revision-input').value = data.nomorRevisi || '';
        document.querySelector('.page-input').value = data.halaman || '';

        if (data.pengertian) document.querySelectorAll('.content-cell')[0].textContent = data.pengertian;
        if (data.tujuan) document.querySelectorAll('.content-cell')[1].innerHTML = data.tujuan;
        if (data.kebijakan) document.querySelectorAll('.content-cell')[2].textContent = data.kebijakan;
        if (data.prosedur) document.querySelectorAll('.content-cell')[3].innerHTML = data.prosedur;
        if (data.unitTerkait) document.querySelectorAll('.content-cell')[4].textContent = data.unitTerkait;

        // Restore signature data with new format
        if (data.instruktur) document.querySelectorAll('.signature-role')[0].textContent = data.instruktur;
        if (data.namaInstruktur) document.querySelectorAll('.signature-name')[0].textContent = data.namaInstruktur;
        if (data.nipInstruktur) document.querySelectorAll('.signature-nip')[0].textContent = data.nipInstruktur;

        // Restore location and date (now in the third column - Disahkan oleh)
        if (data.lokasi) document.querySelector('.signature-location span').textContent = data.lokasi;
        if (data.tanggal) document.getElementById('documentDate').value = data.tanggal;

        // Restore Ka Sub Unit Lab
        if (data.kaSubUnitLab) document.querySelectorAll('.signature-role')[1].textContent = data.kaSubUnitLab;
        if (data.namaKaSubUnit) document.querySelectorAll('.signature-name')[1].textContent = data.namaKaSubUnit;
        if (data.nipKaSubUnit) document.querySelectorAll('.signature-nip')[1].textContent = data.nipKaSubUnit;

        // Restore Ketua Jurusan
        if (data.ketua) document.querySelectorAll('.signature-role')[2].textContent = data.ketua;
        if (data.namaKetua) document.querySelectorAll('.signature-name')[2].textContent = data.namaKetua;
        if (data.nipKetua) document.querySelectorAll('.signature-nip')[2].textContent = data.nipKetua;

        if (data.logo && !data.logo.includes('logo-placeholder')) {
            document.getElementById('logo').src = data.logo;
        }

        // Don't show notification for auto-load on page refresh
        // showNotification('Dokumen berhasil dimuat!');
    }
}

function setupAutoSave() {
    // Auto-save every 30 seconds (without notification)
    setInterval(function() {
        saveDocument(false); // false = don't show notification
    }, 30000);

    // Save on content change (debounced, without notification)
    let saveTimeout;
    document.addEventListener('input', function() {
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(function() {
            saveDocument(false); // false = don't show notification
        }, 2000);
    });
}

function setupDefaultLogo() {
    const logoImg = document.getElementById('logo');

    // Create a default logo placeholder
    logoImg.onerror = function() {
        this.style.display = 'flex';
        this.style.alignItems = 'center';
        this.style.justifyContent = 'center';
        this.style.backgroundColor = '#f0f0f0';
        this.style.color = '#666';
        this.style.fontSize = '12px';
        this.style.fontWeight = 'bold';
        this.innerHTML = 'LOGO';
        this.alt = 'Logo Placeholder';
    };

    // Trigger error if src is placeholder
    if (logoImg.src.includes('logo-placeholder.png')) {
        logoImg.onerror();
    }
}

function setupDateInput() {
    const dateInput = document.getElementById('documentDate');

    // Set today's date as default
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    dateInput.value = formattedDate;

    // Format date display for Indonesian format
    dateInput.addEventListener('change', function() {
        // The input will handle the date format automatically
        // Browser will display it according to user's locale
    });
}

function setupJsonFunctions() {
    const exportBtn = document.getElementById('exportJsonBtn');
    const importBtn = document.getElementById('importJsonBtn');
    const jsonInput = document.getElementById('jsonInput');

    // Export JSON functionality
    exportBtn.addEventListener('click', function() {
        exportToJson();
    });

    // Import JSON functionality
    importBtn.addEventListener('click', function() {
        jsonInput.click();
    });

    jsonInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            importFromJson(file);
        }
    });
}

function showNotification(message) {
    // Remove any existing notifications first
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => {
        if (notif.parentNode) {
            notif.parentNode.removeChild(notif);
        }
    });

    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #4CAF50;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 10000;
        font-size: 14px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        animation: slideDown 0.3s ease-out;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(function() {
        if (notification.parentNode) {
            notification.style.animation = 'slideUp 0.3s ease-in';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, 3000);
}

function exportToJson() {
    const documentData = collectDocumentData();

    // Create filename with current date
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const filename = `instruksi-kerja-${dateStr}.json`;

    // Convert data to JSON string
    const jsonString = JSON.stringify(documentData, null, 2);

    // Create blob and download
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // Create temporary download link
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Clean up
    URL.revokeObjectURL(url);

    showNotification('Data berhasil diekspor ke JSON!');
}

function importFromJson(file) {
    const reader = new FileReader();

    reader.onload = function(e) {
        try {
            const jsonData = JSON.parse(e.target.result);

            // Validate JSON structure
            if (!jsonData.timestamp) {
                throw new Error('Format JSON tidak valid');
            }

            // Load data into document
            loadJsonData(jsonData);

            showNotification('Data berhasil diimpor dari JSON!');

        } catch (error) {
            showNotification('Error: File JSON tidak valid atau rusak!');
            console.error('JSON Import Error:', error);
        }
    };

    reader.onerror = function() {
        showNotification('Error: Gagal membaca file JSON!');
    };

    reader.readAsText(file);
}

function loadJsonData(data) {
    // Load basic document info
    if (data.institutionName) document.querySelector('.institution-name').textContent = data.institutionName;
    if (data.institutionDetail1) document.querySelectorAll('.institution-detail')[0].textContent = data.institutionDetail1;
    if (data.institutionDetail2) document.querySelectorAll('.institution-detail')[1].textContent = data.institutionDetail2;
    if (data.mainTitle) document.querySelector('.main-title').textContent = data.mainTitle;
    if (data.subtitle) document.querySelector('.subtitle').textContent = data.subtitle;

    // Load form inputs
    if (data.kodeIK) document.querySelector('.code-input').value = data.kodeIK;
    if (data.nomorRevisi) document.querySelector('.revision-input').value = data.nomorRevisi;
    if (data.halaman) document.querySelector('.page-input').value = data.halaman;

    // Load content sections
    if (data.pengertian) document.querySelectorAll('.content-cell')[0].textContent = data.pengertian;
    if (data.tujuan) document.querySelectorAll('.content-cell')[1].innerHTML = data.tujuan;
    if (data.kebijakan) document.querySelectorAll('.content-cell')[2].textContent = data.kebijakan;
    if (data.prosedur) document.querySelectorAll('.content-cell')[3].innerHTML = data.prosedur;
    if (data.unitTerkait) document.querySelectorAll('.content-cell')[4].textContent = data.unitTerkait;

    // Load signature data
    if (data.instruktur) document.querySelectorAll('.signature-role')[0].textContent = data.instruktur;
    if (data.namaInstruktur) document.querySelectorAll('.signature-name')[0].textContent = data.namaInstruktur;
    if (data.nipInstruktur) document.querySelectorAll('.signature-nip')[0].textContent = data.nipInstruktur;

    // Load location and date (now in the third column - Disahkan oleh)
    if (data.lokasi) document.querySelector('.signature-location span').textContent = data.lokasi;
    if (data.tanggal) document.getElementById('documentDate').value = data.tanggal;

    // Load Ka Sub Unit Lab
    if (data.kaSubUnitLab) document.querySelectorAll('.signature-role')[1].textContent = data.kaSubUnitLab;
    if (data.namaKaSubUnit) document.querySelectorAll('.signature-name')[1].textContent = data.namaKaSubUnit;
    if (data.nipKaSubUnit) document.querySelectorAll('.signature-nip')[1].textContent = data.nipKaSubUnit;

    // Load Ketua Jurusan
    if (data.ketua) document.querySelectorAll('.signature-role')[2].textContent = data.ketua;
    if (data.namaKetua) document.querySelectorAll('.signature-name')[2].textContent = data.namaKetua;
    if (data.nipKetua) document.querySelectorAll('.signature-nip')[2].textContent = data.nipKetua;

    // Load logo if available
    if (data.logo && !data.logo.includes('logo-placeholder')) {
        document.getElementById('logo').src = data.logo;
        document.getElementById('logo').style.border = 'none';
        document.getElementById('logo').style.background = 'none';
    }

    // Save to localStorage as well
    localStorage.setItem('instruksiKerjaData', JSON.stringify(data));
}

// Export functions for external use
window.InstruksiKerja = {
    save: saveDocument,
    load: loadDocument,
    collect: collectDocumentData,
    notify: showNotification,
    exportJson: exportToJson,
    importJson: importFromJson
};

// Load saved document on page load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(loadDocument, 500);
});
