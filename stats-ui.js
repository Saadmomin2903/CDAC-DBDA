// Statistics Dashboard UI
// Uses ApexCharts for visualizations

let statsModal = null;
let charts = {};

// Initialize Stats UI
export function initStatsUI() {
    createStatsModal();
    setupStatsListeners();
}

// Create the stats modal HTML
function createStatsModal() {
    const modalHTML = `
    <div id="statsModal" class="modal">
        <div class="modal-content glass" style="max-width: 900px; width: 95%;">
            <div class="modal-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-6);">
                <h2 style="margin: 0; font-size: var(--text-2xl); background: linear-gradient(135deg, var(--primary), var(--accent-teal)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Your Learning Stats</h2>
                <button class="btn-icon" style="width: 32px; height: 32px; font-size: 1.25rem;" onclick="closeStatsModal()">×</button>
            </div>
            
            <div class="stats-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--spacing-4); margin-bottom: var(--spacing-8);">
                <!-- Stat Cards -->
                <div class="card" style="text-align: center; padding: var(--spacing-4);">
                    <div style="font-size: var(--text-sm); color: var(--text-secondary); margin-bottom: var(--spacing-1);">Questions Completed</div>
                    <div id="statTotalQuestions" style="font-size: var(--text-3xl); font-weight: var(--weight-bold); color: var(--primary);">0</div>
                </div>
                <div class="card" style="text-align: center; padding: var(--spacing-4);">
                    <div style="font-size: var(--text-sm); color: var(--text-secondary); margin-bottom: var(--spacing-1);">Completion Rate</div>
                    <div id="statCompletionRate" style="font-size: var(--text-3xl); font-weight: var(--weight-bold); color: var(--accent-teal);">0%</div>
                </div>
                <div class="card" style="text-align: center; padding: var(--spacing-4);">
                    <div style="font-size: var(--text-sm); color: var(--text-secondary); margin-bottom: var(--spacing-1);">Modules Active</div>
                    <div id="statActiveModules" style="font-size: var(--text-3xl); font-weight: var(--weight-bold); color: var(--warning);">0</div>
                </div>
            </div>

            <div class="charts-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: var(--spacing-6);">
                <!-- Overall Progress Donut -->
                <div class="card">
                    <h3 style="margin-bottom: var(--spacing-4); font-size: var(--text-lg);">Overall Progress</h3>
                    <div id="chartOverall" style="min-height: 300px;"></div>
                </div>

                <!-- Module Breakdown Bar -->
                <div class="card">
                    <h3 style="margin-bottom: var(--spacing-4); font-size: var(--text-lg);">Module Breakdown</h3>
                    <div id="chartModules" style="min-height: 300px;"></div>
                </div>
            </div>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    statsModal = document.getElementById('statsModal');
}

// Setup listeners
function setupStatsListeners() {
    window.addEventListener('show-stats-modal', (e) => {
        openStatsModal(e.detail);
    });

    // Global close function
    window.closeStatsModal = function () {
        if (statsModal) {
            statsModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    };

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (statsModal && e.target === statsModal) {
            window.closeStatsModal();
        }
    });
}

// Open modal and render charts with data
export function openStatsModal(data) {
    if (!statsModal) return;

    // Show modal
    statsModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling

    // Update summary cards
    document.getElementById('statTotalQuestions').textContent = data.totalCompleted;
    document.getElementById('statCompletionRate').textContent = `${data.completionPercentage}%`;
    document.getElementById('statActiveModules').textContent = data.activeModules;

    // Render charts (timeout to allow modal to flex first)
    setTimeout(() => {
        renderOverallChart(data);
        renderModuleChart(data);
    }, 100);
}

// Render Donut Chart (Completed vs Remaining)
function renderOverallChart(data) {
    const options = {
        series: [data.totalCompleted, data.totalQuestions - data.totalCompleted],
        chart: {
            type: 'donut',
            height: 300,
            background: 'transparent',
            fontFamily: 'Inter, sans-serif'
        },
        labels: ['Completed', 'Remaining'],
        colors: ['#00D9FF', '#1C2229'],
        stroke: {
            show: true,
            colors: ['transparent'],
            width: 2
        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '75%',
                    labels: {
                        show: true,
                        name: {
                            color: '#9BA8B8',
                            offsetY: -10
                        },
                        value: {
                            color: '#E8EDF3',
                            fontSize: '24px',
                            fontWeight: 700,
                            offsetY: 5,
                            formatter: function (val) {
                                return val;
                            }
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            color: '#9BA8B8',
                            formatter: function (w) {
                                return data.totalQuestions;
                            }
                        }
                    }
                }
            }
        },
        legend: {
            position: 'bottom',
            labels: {
                colors: '#E8EDF3'
            }
        },
        tooltip: {
            theme: 'dark'
        }
    };

    if (charts.overall) {
        charts.overall.destroy();
    }

    charts.overall = new ApexCharts(document.querySelector("#chartOverall"), options);
    charts.overall.render();
}

// Render Bar Chart (Module Performance)
function renderModuleChart(data) {
    const moduleNames = data.moduleBreakdown.map(m => m.name);

    // Data series
    const correctData = data.moduleBreakdown.map(m => m.correct);
    const wrongData = data.moduleBreakdown.map(m => m.wrong);
    const otherData = data.moduleBreakdown.map(m => m.other);

    const options = {
        series: [
            { name: 'Correct', data: correctData },
            { name: 'Wrong', data: wrongData },
            { name: 'Completed', data: otherData }
        ],
        chart: {
            type: 'bar',
            height: 300,
            stacked: true,
            background: 'transparent',
            toolbar: {
                show: false
            },
            fontFamily: 'Inter, sans-serif'
        },
        colors: ['#00E676', '#FF6B6B', '#00D9FF'],
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
                barHeight: '60%'
            }
        },
        dataLabels: {
            enabled: true,
            textAnchor: 'start',
            style: {
                colors: ['#fff']
            },
            formatter: function (val, opt) {
                return val > 0 ? val : '';
            },
            offsetX: 0,
        },
        xaxis: {
            categories: moduleNames,
            labels: {
                style: {
                    colors: '#9BA8B8'
                }
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#E8EDF3',
                    fontSize: '13px'
                },
                maxWidth: 160
            }
        },
        grid: {
            borderColor: 'rgba(255, 255, 255, 0.05)',
            xaxis: {
                lines: {
                    show: true
                }
            }
        },
        theme: {
            mode: 'dark'
        },
        tooltip: {
            theme: 'dark',
            y: {
                formatter: function (val) {
                    return val + " questions";
                }
            }
        }
    };

    if (charts.modules) {
        charts.modules.destroy();
    }

    charts.modules = new ApexCharts(document.querySelector("#chartModules"), options);
    charts.modules.render();
}
