// Instruksi Kerja JavaScript Functions

function initializeApp() {
    console.log('Initializing app...');

    // Setup logo upload functionality
    console.log('Setting up logo upload...');
    setupLogoUpload();

    // Setup print functionality
    console.log('Setting up print function...');
    setupPrintFunction();

    // Setup save functionality
    console.log('Setting up save function...');
    setupSaveFunction();

    // Setup auto-save
    console.log('Setting up auto-save...');
    setupAutoSave();

    // Add placeholder logo if none exists
    console.log('Setting up default logo...');
    setupDefaultLogo();

    // Setup date input
    console.log('Setting up date input...');
    setupDateInput();

    // Setup JSON export/import
    console.log('Setting up JSON functions...');
    setupJsonFunctions();

    // Setup rich text editing
    console.log('Setting up rich text editor...');
    setupRichTextEditor();

    // Setup content image handling
    console.log('Setting up content image handling...');
    setupContentImageHandling();

    // Setup clear functionality
    console.log('Setting up clear function...');
    setupClearFunction();

    // Setup test functionality
    console.log('Setting up test function...');
    setupTestFunction();

    // Setup print options
    console.log('Setting up print options...');
    setupPrintOptions();

    console.log('App initialization complete!');
}

function setupClearFunction() {
    const clearBtn = document.getElementById('clearBtn');

    if (!clearBtn) {
        console.error('Clear button not found!');
        return;
    }

    console.log('Setting up clear button...');
    clearBtn.addEventListener('click', function() {
        console.log('Clear button clicked');
        if (confirm('Apakah Anda yakin ingin membersihkan semua data? Tindakan ini tidak dapat dibatalkan.')) {
            clearAllData();
        }
    });
}

function clearAllData() {
    // Clear all content cells
    const contentCells = document.querySelectorAll('.content-cell[contenteditable="true"]');
    contentCells.forEach(cell => {
        cell.innerHTML = '';
    });

    // Clear form inputs
    document.querySelector('.code-input').value = '';
    document.querySelector('.revision-input').value = '';
    document.querySelector('.page-input').value = '';

    // Reset editable text fields to defaults
    document.querySelector('.institution-name').textContent = 'Jurusan Keperawatan';
    document.querySelectorAll('.institution-detail')[0].textContent = 'Politekkes Semarang';
    document.querySelectorAll('.institution-detail')[1].textContent = 'Prodi Tegal';
    document.querySelector('.main-title').textContent = 'INSTRUKSI KERJA';
    document.querySelector('.subtitle').textContent = 'Pemeliharaan Alat';

    // Reset signature fields
    document.querySelectorAll('.signature-role')[0].textContent = 'Instruktur';
    document.querySelectorAll('.signature-name')[0].textContent = '[nama]';
    document.querySelectorAll('.signature-nip')[0].textContent = '[NIP]';

    document.querySelectorAll('.signature-role')[1].textContent = 'Ka. Sub Unit Lab';
    document.querySelectorAll('.signature-name')[1].textContent = 'Fatchurrozak Himawan, Ns.M.Kep.';
    document.querySelectorAll('.signature-nip')[1].textContent = 'NIP. ..........';

    document.querySelectorAll('.signature-role')[2].textContent = 'Ketua Jurusan';
    document.querySelectorAll('.signature-name')[2].textContent = 'Deddy Utomo, SKM.M.H.Kes';
    document.querySelectorAll('.signature-nip')[2].textContent = 'NIP.......';

    // Reset location and date
    document.querySelector('.signature-location span').textContent = 'Tegal';
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    document.getElementById('documentDate').value = formattedDate;

    // Reset logo to placeholder
    const logoImg = document.getElementById('logo');
    logoImg.src = 'logo-placeholder.svg';
    logoImg.style.border = '1px dashed #ccc';
    logoImg.style.background = '#f9f9f9';
    logoImg.style.width = '80px';
    logoImg.style.height = '80px';

    // Clear localStorage
    localStorage.removeItem('instruksiKerjaData');

    // Show notification
    showNotification('Semua data berhasil dibersihkan!');

    // Re-setup content image handlers
    setTimeout(() => {
        setupContentImageClickHandlers();
    }, 100);
}

function setupTestFunction() {
    const testBtn = document.getElementById('testInsertBtn');

    if (!testBtn) {
        console.error('Test button not found!');
        return;
    }

    console.log('Setting up test button...');
    testBtn.addEventListener('click', function() {
        console.log('Test button clicked');
        showTestDialog();
    });
}

function setupPrintOptions() {
    const repeatHeaderToggle = document.getElementById('repeatHeaderToggle');

    if (!repeatHeaderToggle) {
        console.error('Repeat header toggle not found!');
        return;
    }

    console.log('Setting up print options...');

    // Add change event listener
    repeatHeaderToggle.addEventListener('change', function() {
        const isEnabled = this.checked;
        console.log('Repeat header toggle changed:', isEnabled);

        // Show notification about the change
        if (isEnabled) {
            showNotification('✅ Header berulang diaktifkan - cocok untuk dokumen panjang');
        } else {
            showNotification('❌ Header berulang dinonaktifkan - header hanya di halaman pertama');
        }

        // Save preference to localStorage
        localStorage.setItem('repeatHeaderPreference', isEnabled.toString());
    });

    // Load saved preference
    const savedPreference = localStorage.getItem('repeatHeaderPreference');
    if (savedPreference !== null) {
        repeatHeaderToggle.checked = savedPreference === 'true';
        console.log('Loaded repeat header preference:', repeatHeaderToggle.checked);
    }
}

function showTestDialog() {
    const debugInfo = `
=== DEBUG INFO - INSERT GAMBAR ===

Global Variables:
- currentEditingElement: ${currentEditingElement ? 'SET ✅' : 'NOT SET ❌'}
- currentContentImage: ${currentContentImage ? 'SET' : 'NOT SET'}
- currentTargetElement: ${currentTargetElement ? 'SET' : 'NOT SET'}

Elements Check:
- richTextToolbar: ${document.getElementById('richTextToolbar') ? 'FOUND ✅' : 'NOT FOUND ❌'}
- insertImageBtn: ${document.getElementById('insertImageBtn') ? 'FOUND ✅' : 'NOT FOUND ❌'}
- contentImageInput: ${document.getElementById('contentImageInput') ? 'FOUND ✅' : 'NOT FOUND ❌'}

Rich Content Areas: ${document.querySelectorAll('.rich-content[contenteditable="true"]').length}

Active Element: ${document.activeElement ? document.activeElement.className : 'NONE'}

Functions:
- showContentImageModal: ${typeof showContentImageModal}
- insertImageIntoContent: ${typeof insertImageIntoContent}

CARA TEST:
1. Klik area konten (PENGERTIAN, TUJUAN, dll)
2. Tunggu toolbar muncul (border hijau)
3. Klik tombol "🖼️ Gambar"
4. Pilih file gambar
5. Atur ukuran di modal
6. Klik "Terapkan"

Jika masih tidak berfungsi, buka Console (F12) untuk melihat error.
    `;

    alert(debugInfo);
    console.log('=== FULL DEBUG INFO ===');
    console.log('currentEditingElement:', currentEditingElement);
    console.log('Rich content elements:', document.querySelectorAll('.rich-content[contenteditable="true"]'));
    console.log('Toolbar element:', document.getElementById('richTextToolbar'));
    console.log('Insert button:', document.getElementById('insertImageBtn'));
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
            // Check file size (limit to 5MB)
            if (file.size > 5 * 1024 * 1024) {
                showNotification('File terlalu besar! Maksimal 5MB.');
                return;
            }

            // Check file type
            if (!file.type.startsWith('image/')) {
                showNotification('File harus berupa gambar!');
                return;
            }

            const reader = new FileReader();
            reader.onload = function(e) {
                // Show image size modal
                showImageSizeModal(e.target.result, file);
            };
            reader.readAsDataURL(file);
        }
    });

    // Setup image size modal
    setupImageSizeModal();
}

function setupImageSizeModal() {
    const modal = document.getElementById('imageSizeModal');
    const closeBtn = document.querySelector('.close-modal');
    const applyBtn = document.getElementById('applyImageSize');
    const cancelBtn = document.getElementById('cancelImageSize');
    const widthInput = document.getElementById('imageWidth');
    const heightInput = document.getElementById('imageHeight');
    const aspectRatioCheckbox = document.getElementById('maintainAspectRatio');
    const qualitySlider = document.getElementById('imageQuality');
    const qualityValue = document.getElementById('qualityValue');

    let originalImageData = null;
    let originalWidth = 0;
    let originalHeight = 0;

    // Update quality display
    qualitySlider.addEventListener('input', function() {
        qualityValue.textContent = this.value + '%';
    });

    // Maintain aspect ratio
    let isUpdating = false;
    widthInput.addEventListener('input', function() {
        if (aspectRatioCheckbox.checked && !isUpdating && originalWidth > 0) {
            isUpdating = true;
            const ratio = originalHeight / originalWidth;
            heightInput.value = Math.round(this.value * ratio);
            isUpdating = false;
        }
    });

    heightInput.addEventListener('input', function() {
        if (aspectRatioCheckbox.checked && !isUpdating && originalHeight > 0) {
            isUpdating = true;
            const ratio = originalWidth / originalHeight;
            widthInput.value = Math.round(this.value * ratio);
            isUpdating = false;
        }
    });

    // Close modal events
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Apply image size
    applyBtn.addEventListener('click', function() {
        if (originalImageData) {
            const width = parseInt(widthInput.value);
            const height = parseInt(heightInput.value);
            const quality = parseInt(qualitySlider.value) / 100;

            resizeAndApplyImage(originalImageData, width, height, quality);
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = 'none';
        originalImageData = null;
    }

    // Make functions available globally
    window.showImageSizeModal = function(imageData, file) {
        originalImageData = imageData;

        // Create image to get dimensions
        const img = new Image();
        img.onload = function() {
            originalWidth = this.width;
            originalHeight = this.height;

            // Set default values (scale down if too large)
            let defaultWidth = Math.min(this.width, 80);
            let defaultHeight = Math.min(this.height, 80);

            // Maintain aspect ratio for defaults
            if (this.width > this.height) {
                defaultHeight = Math.round((defaultWidth * this.height) / this.width);
            } else {
                defaultWidth = Math.round((defaultHeight * this.width) / this.height);
            }

            widthInput.value = defaultWidth;
            heightInput.value = defaultHeight;

            // Show preview
            document.getElementById('imagePreview').src = imageData;

            // Show modal
            modal.style.display = 'flex';
        };
        img.src = imageData;
    };
}

function resizeAndApplyImage(imageData, width, height, quality) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = function() {
        canvas.width = width;
        canvas.height = height;

        // Use better image rendering
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        // Draw resized image
        ctx.drawImage(img, 0, 0, width, height);

        // Convert to optimized data URL
        const resizedImageData = canvas.toDataURL('image/jpeg', quality);

        // Apply to logo
        const logoImg = document.getElementById('logo');
        logoImg.src = resizedImageData;
        logoImg.style.border = 'none';
        logoImg.style.background = 'none';
        logoImg.style.width = width + 'px';
        logoImg.style.height = height + 'px';

        showNotification(`Logo berhasil diubah! Ukuran: ${width}x${height}px`);
    };

    img.src = imageData;
}

function setupPrintFunction() {
    const printBtn = document.getElementById('printBtn');

    if (!printBtn) {
        console.error('Print button not found!');
        return;
    }

    console.log('Setting up print button...');
    printBtn.addEventListener('click', function() {
        console.log('Print button clicked');
        preparePrintLayout();

        // Print the document
        window.print();

        // Restore layout after printing
        setTimeout(() => {
            restorePrintLayout();
        }, 1000);
    });
}

function preparePrintLayout() {
    // Hide edit controls and modal
    const editControls = document.querySelector('.edit-controls');
    const modal = document.getElementById('imageSizeModal');
    editControls.style.display = 'none';
    modal.style.display = 'none';

    // Prepare logo for printing
    const logo = document.getElementById('logo');

    // Store original styles
    window.printOriginalStyles = {
        logoBorder: logo.style.border,
        logoBackground: logo.style.background,
        logoWidth: logo.style.width,
        logoHeight: logo.style.height
    };

    // If logo is placeholder, ensure it shows properly in print
    if (logo.src.includes('logo-placeholder') || logo.alt === 'Logo Placeholder') {
        logo.style.border = '1px solid #000';
        logo.style.background = 'white';
    }

    // Ensure logo size is appropriate for print
    if (!logo.style.width || logo.style.width === 'auto') {
        logo.style.width = '70px';
        logo.style.height = '70px';
    }

    // Add repeated headers for print based on user preference
    const repeatHeaderToggle = document.getElementById('repeatHeaderToggle');
    const enableRepeatedHeaders = repeatHeaderToggle ? repeatHeaderToggle.checked : false;

    console.log('Repeated headers enabled:', enableRepeatedHeaders);

    if (enableRepeatedHeaders) {
        addRepeatedHeaders();
    } else {
        console.log('Repeated headers disabled by user preference');
    }

    // Format date for print (Indonesian format)
    const dateInput = document.getElementById('documentDate');
    const dateValue = dateInput.value;

    window.printOriginalDate = {
        type: dateInput.type,
        value: dateValue
    };

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

    // Add print-ready class to document
    document.body.classList.add('print-ready');
}

function restorePrintLayout() {
    // Restore edit controls
    const editControls = document.querySelector('.edit-controls');
    editControls.style.display = 'flex';

    // Restore logo styles
    const logo = document.getElementById('logo');
    if (window.printOriginalStyles) {
        logo.style.border = window.printOriginalStyles.logoBorder;
        logo.style.background = window.printOriginalStyles.logoBackground;
        logo.style.width = window.printOriginalStyles.logoWidth;
        logo.style.height = window.printOriginalStyles.logoHeight;
    }

    // Remove repeated headers
    removeRepeatedHeaders();

    // Restore date input
    const dateInput = document.getElementById('documentDate');
    if (window.printOriginalDate) {
        dateInput.type = window.printOriginalDate.type;
        dateInput.value = window.printOriginalDate.value;
    }

    // Remove print-ready class
    document.body.classList.remove('print-ready');

    // Clean up
    delete window.printOriginalStyles;
    delete window.printOriginalDate;
}

function setupSaveFunction() {
    const saveBtn = document.getElementById('saveBtn');

    if (!saveBtn) {
        console.error('Save button not found!');
        return;
    }

    console.log('Setting up save button...');
    saveBtn.addEventListener('click', function() {
        console.log('Save button clicked');
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
    const logoImg = document.getElementById('logo');
    let logoData = logoImg.src;

    // If logo is not placeholder and is base64, include size info
    let logoInfo = {
        src: logoData,
        width: logoImg.style.width || '80px',
        height: logoImg.style.height || '80px'
    };

    // Don't save placeholder logos
    if (logoData.includes('logo-placeholder') || logoImg.alt === 'Logo Placeholder') {
        logoInfo = null;
    }

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
        pengertian: document.querySelectorAll('.content-cell')[0].innerHTML,
        tujuan: document.querySelectorAll('.content-cell')[1].innerHTML,
        kebijakan: document.querySelectorAll('.content-cell')[2].innerHTML,
        prosedur: document.querySelectorAll('.content-cell')[3].innerHTML,
        unitTerkait: document.querySelectorAll('.content-cell')[4].innerHTML,
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
        // Logo with size information
        logo: logoInfo
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

        if (data.pengertian) document.querySelectorAll('.content-cell')[0].innerHTML = data.pengertian;
        if (data.tujuan) document.querySelectorAll('.content-cell')[1].innerHTML = data.tujuan;
        if (data.kebijakan) document.querySelectorAll('.content-cell')[2].innerHTML = data.kebijakan;
        if (data.prosedur) document.querySelectorAll('.content-cell')[3].innerHTML = data.prosedur;
        if (data.unitTerkait) document.querySelectorAll('.content-cell')[4].innerHTML = data.unitTerkait;

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

        // Load logo with backward compatibility
        if (data.logo) {
            const logoImg = document.getElementById('logo');

            // Handle both old format (string) and new format (object)
            if (typeof data.logo === 'string') {
                // Old format - just the src
                if (!data.logo.includes('logo-placeholder')) {
                    logoImg.src = data.logo;
                    logoImg.style.border = 'none';
                    logoImg.style.background = 'none';
                }
            } else if (data.logo && data.logo.src) {
                // New format - object with src and size info
                logoImg.src = data.logo.src;
                logoImg.style.border = 'none';
                logoImg.style.background = 'none';

                if (data.logo.width) logoImg.style.width = data.logo.width;
                if (data.logo.height) logoImg.style.height = data.logo.height;
            }
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

    if (!exportBtn) {
        console.error('Export JSON button not found!');
        return;
    }
    if (!importBtn) {
        console.error('Import JSON button not found!');
        return;
    }
    if (!jsonInput) {
        console.error('JSON input not found!');
        return;
    }

    console.log('Setting up JSON functions...');

    // Export JSON functionality
    exportBtn.addEventListener('click', function() {
        console.log('Export JSON button clicked');
        exportToJson();
    });

    // Import JSON functionality
    importBtn.addEventListener('click', function() {
        console.log('Import JSON button clicked');
        jsonInput.click();
    });

    jsonInput.addEventListener('change', function(e) {
        console.log('JSON file selected');
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
    if (data.pengertian) document.querySelectorAll('.content-cell')[0].innerHTML = data.pengertian;
    if (data.tujuan) document.querySelectorAll('.content-cell')[1].innerHTML = data.tujuan;
    if (data.kebijakan) document.querySelectorAll('.content-cell')[2].innerHTML = data.kebijakan;
    if (data.prosedur) document.querySelectorAll('.content-cell')[3].innerHTML = data.prosedur;
    if (data.unitTerkait) document.querySelectorAll('.content-cell')[4].innerHTML = data.unitTerkait;

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
    if (data.logo) {
        const logoImg = document.getElementById('logo');

        // Handle both old format (string) and new format (object)
        if (typeof data.logo === 'string') {
            // Old format - just the src
            if (!data.logo.includes('logo-placeholder')) {
                logoImg.src = data.logo;
                logoImg.style.border = 'none';
                logoImg.style.background = 'none';
            }
        } else if (data.logo && data.logo.src) {
            // New format - object with src and size info
            logoImg.src = data.logo.src;
            logoImg.style.border = 'none';
            logoImg.style.background = 'none';

            if (data.logo.width) logoImg.style.width = data.logo.width;
            if (data.logo.height) logoImg.style.height = data.logo.height;
        }
    }

    // Save to localStorage as well
    localStorage.setItem('instruksiKerjaData', JSON.stringify(data));

    // Re-setup image click handlers after loading
    setTimeout(() => {
        setupContentImageClickHandlers();
    }, 100);
}

function setupContentImageClickHandlers() {
    const contentImages = document.querySelectorAll('.rich-content img');
    contentImages.forEach(img => {
        // Remove existing listeners to avoid duplicates
        img.removeEventListener('click', handleContentImageClick);
        // Add new listener
        img.addEventListener('click', handleContentImageClick);
    });
}

function handleContentImageClick(e) {
    e.preventDefault();
    selectContentImage(this);
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

// Global variable for current editing element
let currentEditingElement = null;

function setupRichTextEditor() {
    const richContentElements = document.querySelectorAll('.rich-content[contenteditable="true"]');
    const toolbar = document.getElementById('richTextToolbar');

    richContentElements.forEach(element => {
        // Handle focus - show toolbar
        element.addEventListener('focus', function() {
            currentEditingElement = this;
            setTimeout(() => showToolbar(this), 100); // Small delay to ensure element is focused
        });

        // Handle click - also show toolbar
        element.addEventListener('click', function() {
            currentEditingElement = this;
            setTimeout(() => showToolbar(this), 100);
        });

        // Handle blur - hide toolbar after delay
        element.addEventListener('blur', function() {
            setTimeout(() => {
                if (!toolbar.matches(':hover') && !document.activeElement.closest('.rich-toolbar')) {
                    hideToolbar();
                }
            }, 300);
        });

        // Handle paste events
        element.addEventListener('paste', function(e) {
            handleRichPaste(e, this);
        });

        // Handle image clicks
        element.addEventListener('click', function(e) {
            if (e.target.tagName === 'IMG') {
                e.preventDefault();
                selectContentImage(e.target);
            }
        });

        // Handle drag and drop
        element.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.classList.add('paste-active');
        });

        element.addEventListener('dragleave', function(e) {
            e.preventDefault();
            this.classList.remove('paste-active');
        });

        element.addEventListener('drop', function(e) {
            e.preventDefault();
            this.classList.remove('paste-active');
            handleImageDrop(e, this);
        });
    });

    // Setup toolbar buttons
    setupToolbarButtons();

    // Handle window scroll and resize to reposition toolbar
    let repositionTimeout;
    window.addEventListener('scroll', function() {
        if (currentEditingElement && toolbar.style.display === 'flex') {
            clearTimeout(repositionTimeout);
            repositionTimeout = setTimeout(() => {
                showToolbar(currentEditingElement);
            }, 100);
        }
    });

    window.addEventListener('resize', function() {
        if (currentEditingElement && toolbar.style.display === 'flex') {
            clearTimeout(repositionTimeout);
            repositionTimeout = setTimeout(() => {
                showToolbar(currentEditingElement);
            }, 100);
        }
    });
}

function showToolbar(element) {
    const toolbar = document.getElementById('richTextToolbar');
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // Set current editing element
    currentEditingElement = element;

    // Add visual indicator
    document.querySelectorAll('.rich-content').forEach(el => el.classList.remove('active-editing'));
    element.classList.add('active-editing');

    // Calculate position relative to viewport and scroll
    let left = rect.left + scrollLeft;
    let top = rect.top + scrollTop - 45; // 45px above the element

    // Ensure toolbar doesn't go off-screen
    const toolbarWidth = 300; // Approximate toolbar width
    const viewportWidth = window.innerWidth;

    if (left + toolbarWidth > viewportWidth) {
        left = viewportWidth - toolbarWidth - 10;
    }
    if (left < 10) {
        left = 10;
    }

    // If toolbar would be above viewport, show it below the element
    if (top < scrollTop + 10) {
        top = rect.bottom + scrollTop + 10;
    }

    toolbar.style.display = 'flex';
    toolbar.style.position = 'absolute';
    toolbar.style.left = left + 'px';
    toolbar.style.top = top + 'px';
    toolbar.style.zIndex = '10000';

    // Update button states
    updateToolbarButtonStates();

    console.log('Toolbar positioned at:', left, top);
    console.log('currentEditingElement set to:', currentEditingElement);
}

function hideToolbar() {
    const toolbar = document.getElementById('richTextToolbar');
    toolbar.style.display = 'none';

    // Don't reset currentEditingElement immediately - keep it for potential image insertion
    setTimeout(() => {
        if (toolbar.style.display === 'none') {
            console.log('Resetting currentEditingElement after toolbar hide');
            // Only reset if no active contenteditable element
            if (!document.activeElement || !document.activeElement.contentEditable || document.activeElement.contentEditable === 'false') {
                currentEditingElement = null;
            }
        }
    }, 1000);
}

function setupToolbarButtons() {
    const toolbar = document.getElementById('richTextToolbar');
    const insertImageBtn = document.getElementById('insertImageBtn');
    const contentImageInput = document.getElementById('contentImageInput');

    // Handle toolbar button clicks
    toolbar.addEventListener('click', function(e) {
        if (e.target.classList.contains('toolbar-btn') && e.target.dataset.command) {
            e.preventDefault();
            executeCommand(e.target.dataset.command);
        }
    });

    // Handle image insertion
    insertImageBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Insert image button clicked');
        console.log('currentEditingElement:', currentEditingElement);

        // Fallback: try to find currently focused contenteditable element
        if (!currentEditingElement) {
            const activeElement = document.activeElement;
            if (activeElement && activeElement.contentEditable === 'true' && activeElement.classList.contains('rich-content')) {
                currentEditingElement = activeElement;
                console.log('Found active element as fallback:', currentEditingElement);
            } else {
                // Last resort: find any rich-content element that was recently clicked
                const richElements = document.querySelectorAll('.rich-content[contenteditable="true"]');
                if (richElements.length > 0) {
                    currentEditingElement = richElements[0]; // Use first one as fallback
                    console.log('Using first rich-content element as fallback');
                }
            }
        }

        if (!currentEditingElement) {
            showNotification('Pilih area konten terlebih dahulu!');
            return;
        }

        contentImageInput.click();
    });

    contentImageInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        console.log('File selected:', file);
        console.log('currentEditingElement:', currentEditingElement);

        if (file && currentEditingElement) {
            insertImageIntoContent(file, currentEditingElement);
        } else if (file && !currentEditingElement) {
            showNotification('Error: Area konten tidak terdeteksi!');
        }

        // Reset input value so same file can be selected again
        this.value = '';
    });

    // Prevent toolbar from losing focus but allow button clicks
    toolbar.addEventListener('mousedown', function(e) {
        // Don't prevent default for buttons - they need to be clickable
        if (!e.target.classList.contains('toolbar-btn') && e.target.id !== 'insertImageBtn') {
            e.preventDefault();
        }
    });

    // Ensure toolbar stays visible when clicking buttons
    toolbar.addEventListener('click', function(e) {
        e.stopPropagation();
        console.log('Toolbar clicked:', e.target);
    });
}

function executeCommand(command) {
    document.execCommand(command, false, null);
    updateToolbarButtonStates();
}

function updateToolbarButtonStates() {
    const buttons = document.querySelectorAll('.toolbar-btn[data-command]');
    buttons.forEach(button => {
        const command = button.dataset.command;
        if (document.queryCommandState(command)) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function handleRichPaste(e, element) {
    e.preventDefault();

    const clipboardData = e.clipboardData || window.clipboardData;

    // Handle image paste
    const items = clipboardData.items;
    for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
            const file = items[i].getAsFile();
            insertImageIntoContent(file, element);
            return;
        }
    }

    // Handle text/HTML paste
    let pastedData = clipboardData.getData('text/html') || clipboardData.getData('text/plain');

    if (pastedData) {
        // Clean up the pasted HTML
        pastedData = cleanPastedHTML(pastedData);

        // Insert the cleaned content
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            range.deleteContents();

            const div = document.createElement('div');
            div.innerHTML = pastedData;

            const fragment = document.createDocumentFragment();
            while (div.firstChild) {
                fragment.appendChild(div.firstChild);
            }

            range.insertNode(fragment);
            range.collapse(false);
            selection.removeAllRanges();
            selection.addRange(range);
        }

        // Show paste animation
        element.classList.add('paste-active');
        setTimeout(() => {
            element.classList.remove('paste-active');
        }, 1000);
    }
}

function cleanPastedHTML(html) {
    // Create a temporary div to clean the HTML
    const temp = document.createElement('div');
    temp.innerHTML = html;

    // Remove unwanted elements and attributes
    const elementsToRemove = temp.querySelectorAll('script, style, meta, link');
    elementsToRemove.forEach(el => el.remove());

    // Clean attributes
    const allElements = temp.querySelectorAll('*');
    allElements.forEach(el => {
        // Keep only essential attributes
        const allowedAttributes = ['src', 'alt', 'href', 'title'];
        const attributes = Array.from(el.attributes);
        attributes.forEach(attr => {
            if (!allowedAttributes.includes(attr.name)) {
                el.removeAttribute(attr.name);
            }
        });
    });

    return temp.innerHTML;
}

function handleImageDrop(e, element) {
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type.startsWith('image/')) {
        insertImageIntoContent(files[0], element);
    }
}

function insertImageIntoContent(file, element) {
    if (file.size > 5 * 1024 * 1024) {
        showNotification('File terlalu besar! Maksimal 5MB.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        // Show content image modal for size adjustment
        showContentImageModal(e.target.result, element);
    };
    reader.readAsDataURL(file);
}

// Global variables for content image handling
let currentContentImage = null;
let currentTargetElement = null;
let originalImageData = null;
let originalWidth = 0;
let originalHeight = 0;

function setupContentImageHandling() {
    const modal = document.getElementById('contentImageModal');
    const closeBtn = document.getElementById('closeContentImageModal');
    const applyBtn = document.getElementById('applyContentImageSize');
    const deleteBtn = document.getElementById('deleteContentImage');
    const cancelBtn = document.getElementById('cancelContentImageSize');
    const widthInput = document.getElementById('contentImageWidth');
    const heightInput = document.getElementById('contentImageHeight');
    const aspectRatioCheckbox = document.getElementById('contentMaintainAspectRatio');
    const qualitySlider = document.getElementById('contentImageQuality');
    const qualityValue = document.getElementById('contentQualityValue');
    const positionButtons = document.querySelectorAll('.position-btn');

    // Update quality display
    qualitySlider.addEventListener('input', function() {
        qualityValue.textContent = this.value + '%';
    });

    // Handle position button clicks
    positionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            positionButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
        });
    });

    // Maintain aspect ratio
    let isUpdating = false;
    widthInput.addEventListener('input', function() {
        if (aspectRatioCheckbox.checked && !isUpdating && originalWidth > 0) {
            isUpdating = true;
            const ratio = originalHeight / originalWidth;
            heightInput.value = Math.round(this.value * ratio);
            isUpdating = false;
        }
    });

    heightInput.addEventListener('input', function() {
        if (aspectRatioCheckbox.checked && !isUpdating && originalHeight > 0) {
            isUpdating = true;
            const ratio = originalWidth / originalHeight;
            widthInput.value = Math.round(this.value * ratio);
            isUpdating = false;
        }
    });

    // Close modal events
    closeBtn.addEventListener('click', closeContentImageModal);
    cancelBtn.addEventListener('click', closeContentImageModal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeContentImageModal();
        }
    });

    // Apply image changes
    applyBtn.addEventListener('click', function() {
        console.log('Apply button clicked');
        console.log('originalImageData:', !!originalImageData);
        console.log('currentTargetElement:', !!currentTargetElement);
        console.log('currentContentImage:', !!currentContentImage);

        if (originalImageData && (currentTargetElement || currentContentImage)) {
            const width = parseInt(widthInput.value);
            const height = parseInt(heightInput.value);
            const quality = parseInt(qualitySlider.value) / 100;
            const position = document.querySelector('.position-btn.active').dataset.position;

            console.log('Applying image with size:', width, 'x', height, 'quality:', quality, 'position:', position);
            resizeAndApplyContentImage(originalImageData, width, height, quality, position);
        } else {
            console.log('Missing required data for image application');
            showNotification('Error: Data gambar tidak lengkap!');
        }
    });

    // Delete image
    deleteBtn.addEventListener('click', function() {
        if (currentContentImage) {
            currentContentImage.remove();
            closeContentImageModal();
            showNotification('Gambar berhasil dihapus!');
        }
    });

    function closeContentImageModal() {
        modal.style.display = 'none';
        currentContentImage = null;
        currentTargetElement = null;
        originalImageData = null;

        // Remove selection from all images
        document.querySelectorAll('.rich-content img.selected').forEach(img => {
            img.classList.remove('selected');
        });
    }

    // Make functions available globally
    window.showContentImageModal = function(imageData, targetElement, existingImage = null) {
        console.log('showContentImageModal called');
        console.log('targetElement:', !!targetElement);
        console.log('existingImage:', !!existingImage);

        currentTargetElement = targetElement;
        currentContentImage = existingImage;
        originalImageData = imageData;

        console.log('Global variables set:');
        console.log('currentTargetElement:', !!currentTargetElement);
        console.log('currentContentImage:', !!currentContentImage);
        console.log('originalImageData:', !!originalImageData);

        // Create image to get dimensions
        const img = new Image();
        img.onload = function() {
            originalWidth = this.width;
            originalHeight = this.height;

            // Set default values
            let defaultWidth = existingImage ?
                (parseInt(existingImage.style.width) || existingImage.width || 200) :
                Math.min(this.width, 300);
            let defaultHeight = existingImage ?
                (parseInt(existingImage.style.height) || existingImage.height || 200) :
                Math.min(this.height, 300);

            // Maintain aspect ratio for defaults if no existing image
            if (!existingImage) {
                if (this.width > this.height) {
                    defaultHeight = Math.round((defaultWidth * this.height) / this.width);
                } else {
                    defaultWidth = Math.round((defaultHeight * this.width) / this.height);
                }
            }

            widthInput.value = defaultWidth;
            heightInput.value = defaultHeight;

            // Show preview
            document.getElementById('contentImagePreview').src = imageData;

            // Set position buttons based on existing image
            setPositionButtons(existingImage);

            // Show modal
            modal.style.display = 'flex';
            console.log('Modal displayed');
        };
        img.src = imageData;
    };

    window.selectContentImage = function(img) {
        // Remove selection from other images
        document.querySelectorAll('.rich-content img.selected').forEach(image => {
            image.classList.remove('selected');
        });

        // Select current image
        img.classList.add('selected');

        // Show modal for editing
        showContentImageModal(img.src, img.closest('.rich-content'), img);
    };
}

function resizeAndApplyContentImage(imageData, width, height, quality, position = 'center') {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = function() {
        canvas.width = width;
        canvas.height = height;

        // Use better image rendering
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        // Draw resized image
        ctx.drawImage(img, 0, 0, width, height);

        // Convert to optimized data URL
        const resizedImageData = canvas.toDataURL('image/jpeg', quality);

        if (currentContentImage) {
            // Update existing image
            currentContentImage.src = resizedImageData;
            currentContentImage.style.width = width + 'px';
            currentContentImage.style.height = height + 'px';
            currentContentImage.style.maxWidth = 'none'; // Override max-width
            currentContentImage.style.objectFit = 'contain';
            currentContentImage.classList.remove('selected');

            // Apply position class
            applyImagePosition(currentContentImage, position);

            // Force reflow to apply styles
            currentContentImage.offsetHeight;
        } else {
            // Insert new image
            insertResizedImageIntoContent(resizedImageData, width, height, position);
        }

        // Close modal
        const modal = document.getElementById('contentImageModal');
        modal.style.display = 'none';

        // Show notification before resetting variables
        const isUpdate = currentContentImage !== null;
        showNotification(`Gambar berhasil ${isUpdate ? 'diubah' : 'ditambahkan'}! Ukuran: ${width}x${height}px`);

        // Reset global variables
        currentContentImage = null;
        currentTargetElement = null;
        originalImageData = null;
    };

    img.src = imageData;
}

function insertResizedImageIntoContent(imageData, width, height, position = 'center') {
    if (!currentTargetElement) return;

    const img = document.createElement('img');
    img.src = imageData;
    img.style.width = width + 'px';
    img.style.height = height + 'px';
    img.style.maxWidth = 'none'; // Don't limit by container
    img.style.objectFit = 'contain';
    img.alt = 'Gambar konten';

    // Apply position class
    applyImagePosition(img, position);

    // Insert at cursor position or at the end
    const selection = window.getSelection();
    if (selection.rangeCount > 0 && currentTargetElement.contains(selection.anchorNode)) {
        const range = selection.getRangeAt(0);
        range.insertNode(img);
        range.collapse(false);
    } else {
        currentTargetElement.appendChild(img);
    }

    // Add click handler for future editing
    img.addEventListener('click', function(e) {
        e.preventDefault();
        selectContentImage(this);
    });

    // Force reflow to ensure styles are applied
    img.offsetHeight;
}

function applyImagePosition(img, position) {
    // Remove existing position classes
    img.classList.remove('img-left', 'img-center', 'img-right');

    // Apply new position class
    switch (position) {
        case 'left':
            img.classList.add('img-left');
            break;
        case 'right':
            img.classList.add('img-right');
            break;
        case 'center':
        default:
            img.classList.add('img-center');
            break;
    }

    console.log('Applied position:', position, 'to image');
}

function setPositionButtons(existingImage) {
    const positionButtons = document.querySelectorAll('.position-btn');

    // Remove active class from all buttons
    positionButtons.forEach(btn => btn.classList.remove('active'));

    if (existingImage) {
        // Detect current position from image classes
        let currentPosition = 'center'; // default

        if (existingImage.classList.contains('img-left')) {
            currentPosition = 'left';
        } else if (existingImage.classList.contains('img-right')) {
            currentPosition = 'right';
        } else if (existingImage.classList.contains('img-center')) {
            currentPosition = 'center';
        }

        // Set active button based on current position
        const activeButton = document.querySelector(`.position-btn[data-position="${currentPosition}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }

        console.log('Detected image position:', currentPosition);
    } else {
        // Default to center for new images
        const centerButton = document.querySelector('.position-btn[data-position="center"]');
        if (centerButton) {
            centerButton.classList.add('active');
        }
    }
}

function addRepeatedHeaders() {
    // Remove any existing repeated headers first
    removeRepeatedHeaders();

    const originalHeader = document.querySelector('.header-section');
    const contentRows = document.querySelectorAll('.content-row');

    if (!originalHeader || contentRows.length === 0) {
        console.log('No header or content rows found for repetition');
        return;
    }

    console.log('Adding repeated headers for print...');

    // Ultra conservative approach - only add header if content is VERY long
    // Calculate total content height to determine if we need header repetition
    let totalContentHeight = 0;
    let hasLongContent = false;

    contentRows.forEach(row => {
        const rowHeight = row.offsetHeight || 100;
        totalContentHeight += rowHeight;

        // Check if any single content section is very long
        const richContent = row.querySelector('.rich-content');
        if (richContent && richContent.offsetHeight > 300) {
            hasLongContent = true;
        }
    });

    console.log(`Total content height: ${totalContentHeight}px, Content rows: ${contentRows.length}, Has long content: ${hasLongContent}`);

    // Only add header if content is extremely long (likely to span 2+ pages)
    if (totalContentHeight > 800 && hasLongContent && contentRows.length >= 4) {
        // Add header before the last content section (usually PROSEDUR or similar)
        const targetIndex = Math.max(3, contentRows.length - 2); // At least index 3, or second to last
        if (contentRows[targetIndex]) {
            const headerClone = createSimpleHeaderClone(originalHeader);
            contentRows[targetIndex].parentNode.insertBefore(headerClone, contentRows[targetIndex]);
            console.log(`Header added before content row ${targetIndex} (strategic position)`);
        }
    } else {
        console.log('Content not long enough for header repetition - skipping');
    }
}

function createSimpleHeaderClone(originalHeader) {
    // Create a much simpler clone that preserves the original structure
    const headerClone = originalHeader.cloneNode(true);

    // Add classes for identification and styling
    headerClone.classList.add('repeated-header');
    headerClone.classList.add('page-header');

    // Remove all IDs to avoid conflicts
    const elementsWithId = headerClone.querySelectorAll('[id]');
    elementsWithId.forEach(element => {
        element.removeAttribute('id');
    });

    // Remove any inline styles that might conflict
    headerClone.style.cssText = '';

    // Ensure the clone uses the same classes as original for consistent styling
    headerClone.className = originalHeader.className + ' repeated-header page-header';

    console.log('Created simple header clone with preserved structure');
    return headerClone;
}

// Keep the old function as backup
function createCleanHeaderClone(originalHeader) {
    const headerClone = originalHeader.cloneNode(true);
    headerClone.classList.add('repeated-header');
    headerClone.classList.add('page-header');

    // Ensure all IDs are removed to avoid conflicts
    const elementsWithId = headerClone.querySelectorAll('[id]');
    elementsWithId.forEach(element => {
        element.removeAttribute('id');
    });

    // Ensure proper structure is maintained
    const logoSection = headerClone.querySelector('.logo-section');
    const titleSection = headerClone.querySelector('.title-section');

    if (logoSection) {
        logoSection.style.width = '25%';
        logoSection.style.minWidth = '150px';
        logoSection.style.display = 'table-cell';
        logoSection.style.verticalAlign = 'middle';
        logoSection.style.textAlign = 'center';
        logoSection.style.padding = '10px';
        logoSection.style.borderRight = '2px solid #000';
    }

    if (titleSection) {
        titleSection.style.width = '75%';
        titleSection.style.minWidth = '450px';
        titleSection.style.display = 'table-cell';
        titleSection.style.verticalAlign = 'middle';
        titleSection.style.padding = '10px';
    }

    return headerClone;
}

function removeRepeatedHeaders() {
    const repeatedHeaders = document.querySelectorAll('.repeated-header');
    repeatedHeaders.forEach(header => {
        header.remove();
    });
    console.log(`Removed ${repeatedHeaders.length} repeated headers`);
}

// Initialize app and load saved document on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing app...');

    // Initialize all app functionality
    initializeApp();

    // Load saved document after initialization
    setTimeout(loadDocument, 500);
});
