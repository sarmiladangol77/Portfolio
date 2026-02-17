document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = document.getElementById('submit-btn');
            const status = document.getElementById('form-status');
            
            
            btn.disabled = true;
            btn.innerText = "Sending...";
            status.innerText = "";

           
                
                // Reset form
                e.target.reset();
                
                // Clear status after 5 seconds
                setTimeout(() => {
                    status.innerText = "";
                }, 5000);
            }, 1500);
    