console.log('Dashboard initialized');

const canvas = document.getElementById('chart');
const ctx = canvas.getContext('2d');

function drawChart() {
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = canvas.offsetHeight;
    
    ctx.clearRect(0, 0, width, height);
    
    const data = [45, 62, 58, 71, 68, 85, 92];
    const max = Math.max(...data);
    const barWidth = width / data.length;
    
    data.forEach((value, index) => {
        const barHeight = (value / max) * (height - 40);
        const x = index * barWidth;
        const y = height - barHeight - 20;
        
        ctx.fillStyle = '#667eea';
        ctx.fillRect(x + 10, y, barWidth - 20, barHeight);
        
        ctx.fillStyle = '#4a5568';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(value, x + barWidth / 2, height - 5);
    });
}

drawChart();
window.addEventListener('resize', drawChart);