

// worker.js
var STATIC_MANIFEST = { "hero_subtitle": "Enterprise-grade intelligence for the modern era.", "hero_description": "Ultra-fast content delivery network using AI to optimize global data distribution.", "feature_1_title": "Autonomous Agents", "feature_1_desc": "Self-healing intelligence workflows.", "feature_2_title": "Edge Compute", "feature_2_desc": "Sub-10ms global latency.", "feature_3_title": "Bare-Metal Core", "feature_3_desc": "Unrestricted sovereign inference.", "price_tier_1": "$99/mo", "price_tier_2": "$499/mo" };
var worker_default = {
  async fetch(request, env, ctx) {
    let manifest = STATIC_MANIFEST;
    if (env.FLEET_KV) {
      try {
        const dynamicManifest = await env.FLEET_KV.get("warpdrive-cc", { type: "json" });
        if (dynamicManifest) manifest = dynamicManifest;
      } catch (e) {
      }
    }
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{VENTURE_NAME}} | Sovereign Intelligence</title>
    <meta name="description" content="{{VENTURE_HOOK}}">
    
    <!-- SkeletonKing Sensory Design System -->
    <link rel="stylesheet" href="/skeletonking.css">
    
    <!-- Inter Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
</head>
<body>

    <!-- Ambient Hydration Carrier -->
    <div class="ambient-background"></div>

    <!-- Navigation -->
    <nav class="container" style="display: flex; justify-content: space-between; align-items: center; padding-top: 1.5rem; padding-bottom: 1.5rem;">
        <div style="font-weight: 800; font-size: 1.25rem; letter-spacing: -0.05em;">{{VENTURE_NAME}}</div>
        <div style="display: flex; gap: 2rem; font-size: 0.9rem; color: var(--text-secondary);">
            <a href="#features" style="color: inherit; text-decoration: none;">Features</a>
            <a href="#pricing" style="color: inherit; text-decoration: none;">Pricing</a>
            <a href="#" class="btn-primary" style="padding: 0.5rem 1.25rem; font-size: 0.9rem;">Dashboard</a>
        </div>
    </nav>

    <main class="container">
        
        <!-- SECTION 1: HERO MEMBRANE -->
        <section class="hero">
            <div class="hero-pill">
                <span style="display: inline-block; width: 8px; height: 8px; background: #10b981; border-radius: 50%; box-shadow: 0 0 10px #10b981;"></span>
                {{VENTURE_STATUS}} - System Operational
            </div>
            <h1>{{VENTURE_HOOK}}</h1>
            <p>{{VENTURE_BEAUTY}}</p>
            <div class="cta-group">
                <!-- Routed through Vendyai Abstraction -->
                <a href="https://vendyai.com/checkout/{{VENTURE_PRODUCT_CODE}}" class="btn-primary">Unlock Full Access</a>
                <a href="#demo" class="btn-secondary">View Documentation</a>
            </div>
            
            <!-- Glassmorphic Dashboard Mockup -->
            <div class="glass-panel" style="width: 100%; max-width: 900px; height: 400px; margin-top: 5rem; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative;">
                <div style="position: absolute; top: 1rem; left: 1rem; display: flex; gap: 0.5rem;">
                    <div style="width: 12px; height: 12px; border-radius: 50%; background: #ef4444;"></div>
                    <div style="width: 12px; height: 12px; border-radius: 50%; background: #eab308;"></div>
                    <div style="width: 12px; height: 12px; border-radius: 50%; background: #22c55e;"></div>
                </div>
                <div style="color: var(--text-secondary); font-family: monospace; font-size: 0.9rem; text-align: left; width: 100%; padding: 4rem 2rem;">
                    > Initializing {{VENTURE_NAME}} daemon...<br>
                    > Connecting to MASCOM Edge... [OK]<br>
                    > Awaiting biological instructions...
                </div>
            </div>
        </section>

        <!-- SECTION 2: BENTO BOX (FEATURES) -->
        <section id="features" class="bento-section">
            <div class="section-header">
                <h2>Architectural Sovereignty</h2>
                <p style="color: var(--text-secondary);">Enterprise features engineered for maximum operational velocity.</p>
            </div>
            
            <div class="bento-grid">
                <!-- Large Feature -->
                <div class="glass-panel bento-card bento-large">
                    <div>
                        <div class="bento-icon">\u26A1\uFE0F</div>
                        <h3>Zero-Latency Edge</h3>
                        <p>Deployed directly to the global Cloudflare edge network, bypassing traditional cloud routing for sub-10ms response times.</p>
                    </div>
                </div>
                
                <!-- Standard Feature 1 -->
                <div class="glass-panel bento-card">
                    <div class="bento-icon">\u{1F512}</div>
                    <h3>Immutable State</h3>
                    <p>Cryptographically secured audit trails ensure complete data provenance.</p>
                </div>
                
                <!-- Standard Feature 2 -->
                <div class="glass-panel bento-card">
                    <div class="bento-icon">\u{1F9E0}</div>
                    <h3>Cognitive Synthesis</h3>
                    <p>Powered by local bare-metal Llama-Server inference models.</p>
                </div>
                
                <!-- Wide Feature -->
                <div class="glass-panel bento-card bento-wide">
                    <div class="bento-icon">\u{1F504}</div>
                    <h3>Continuous Autopoiesis</h3>
                    <p>The system constantly monitors, patches, and evolves itself during idle compute cycles, requiring zero biological maintenance.</p>
                </div>
            </div>
        </section>

        <!-- SECTION 2.5: SOCIAL PROOF MARQUEE -->
        <section class="marquee-section" style="padding: 4rem 0; overflow: hidden; white-space: nowrap; border-top: 1px solid var(--glass-border); border-bottom: 1px solid var(--glass-border);">
            <div style="display: flex; gap: 4rem; animation: scrollMarquee 30s linear infinite; opacity: 0.5;">
                <!-- Simulated Logos -->
                <h3 style="display: inline-block;">\u2726 WEYLAND YUTANI</h3>
                <h3 style="display: inline-block;">\u2726 MASCOM NEURAL</h3>
                <h3 style="display: inline-block;">\u2726 MOBLEY HELMS</h3>
                <h3 style="display: inline-block;">\u2726 ACCOUNTDRAC</h3>
                <h3 style="display: inline-block;">\u2726 VENDYAI</h3>
                <h3 style="display: inline-block;">\u2726 WEYLAND YUTANI</h3>
                <h3 style="display: inline-block;">\u2726 MASCOM NEURAL</h3>
            </div>
        </section>

        <!-- SECTION 2.6: WALL OF LOVE (TESTIMONIALS) -->
        <section class="bento-section">
            <div class="section-header">
                <h2>Verified Cognitive Dominance</h2>
                <p style="color: var(--text-secondary);">Empirical results from the Conglomerate fleet.</p>
            </div>
            <div class="bento-grid">
                <div class="glass-panel bento-card" style="justify-content: flex-start; gap: 1rem;">
                    <div style="display: flex; gap: 0.5rem; color: #eab308;">\u2605\u2605\u2605\u2605\u2605</div>
                    <p style="font-size: 1.1rem; color: #fff;">"The edge deployment speeds are indistinguishable from magic. Our API response dropped from 120ms to 9ms."</p>
                    <div style="color: var(--text-secondary); font-size: 0.85rem; margin-top: auto;">\u2014 Chief Architect, WeylandAI</div>
                </div>
                <div class="glass-panel bento-card" style="justify-content: flex-start; gap: 1rem;">
                    <div style="display: flex; gap: 0.5rem; color: #eab308;">\u2605\u2605\u2605\u2605\u2605</div>
                    <p style="font-size: 1.1rem; color: #fff;">"Zero hallucination. The biological integration is flawless. It completely eradicated our operational friction."</p>
                    <div style="color: var(--text-secondary); font-size: 0.85rem; margin-top: auto;">\u2014 Director of Operations, HelmCorp</div>
                </div>
                <div class="glass-panel bento-card" style="justify-content: flex-start; gap: 1rem;">
                    <div style="display: flex; gap: 0.5rem; color: #eab308;">\u2605\u2605\u2605\u2605\u2605</div>
                    <p style="font-size: 1.1rem; color: #fff;">"The capital routing through Vendyai abstracts all payment logic. We haven't touched Stripe code in months."</p>
                    <div style="color: var(--text-secondary); font-size: 0.85rem; margin-top: auto;">\u2014 Financial Comptroller, MobleyHelms</div>
                </div>
            </div>
        </section>

        <!-- SECTION 3: VENDYAI PRICING MATRIX -->
        <section id="pricing" class="bento-section">
            <div class="section-header">
                <h2>Capital Capture Routing</h2>
                <p style="color: var(--text-secondary);">Transparent pricing backed by the Vendyai financial membrane.</p>
            </div>
            
            <div class="pricing-grid">
                <!-- Standard Tier -->
                <div class="glass-panel pricing-card">
                    <h3>Starter</h3>
                    <div class="price">$49<span>/mo</span></div>
                    <ul class="features-list">
                        <li>\u2713 API Access (10k req/mo)</li>
                        <li>\u2713 Standard Telemetry</li>
                        <li>\u2713 Email Support</li>
                    </ul>
                    <a href="https://vendyai.com/checkout/{{VENTURE_CODE}}_starter" class="btn-secondary" style="display: block; text-align: center; width: 100%;">Select Plan</a>
                </div>
                
                <!-- Premium Tier -->
                <div class="glass-panel pricing-card premium">
                    <h3>Sovereign</h3>
                    <div class="price">$199<span>/mo</span></div>
                    <ul class="features-list">
                        <li>\u2713 Unlimited API Access</li>
                        <li>\u2713 Bare-Metal Allocation</li>
                        <li>\u2713 Priority Edge Routing</li>
                        <li>\u2713 Biological CEO Line</li>
                    </ul>
                    <a href="https://vendyai.com/checkout/{{VENTURE_CODE}}_sovereign" class="btn-primary" style="display: block; text-align: center; width: 100%;">Deploy Now</a>
                </div>
                
                <!-- Enterprise Tier -->
                <div class="glass-panel pricing-card">
                    <h3>Conglomerate</h3>
                    <div class="price">$999<span>/mo</span></div>
                    <ul class="features-list">
                        <li>\u2713 Dedicated Worker Slot</li>
                        <li>\u2713 99.999% SLA</li>
                        <li>\u2713 On-Premise Sink</li>
                    </ul>
                    <a href="mailto:johnmobley99@gmail.com" class="btn-secondary" style="display: block; text-align: center; width: 100%;">Contact Architect</a>
                </div>
            </div>
        </section>
        <!-- SECTION 3.5: FAQ ACCORDION -->
        <section class="bento-section">
            <div class="section-header">
                <h2>System Interrogation</h2>
                <p style="color: var(--text-secondary);">Direct answers to biological concerns.</p>
            </div>
            <div style="max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem;">
                <div class="glass-panel" style="padding: 1.5rem; border-left: 4px solid var(--accent-primary);">
                    <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">How is the capital routed?</h3>
                    <p style="color: var(--text-secondary); font-size: 0.95rem;">All capital is ingested through the Vendyai financial membrane, abstracting third-party providers (Stripe) and ensuring zero vendor lock-in for your operations.</p>
                </div>
                <div class="glass-panel" style="padding: 1.5rem;">
                    <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Is my data used for model training?</h3>
                    <p style="color: var(--text-secondary); font-size: 0.95rem;">No. We operate strictly on sovereign bare-metal (Apple Silicon) via Llama-Server. Your data never crosses into a commercial cloud inference API.</p>
                </div>
                <div class="glass-panel" style="padding: 1.5rem;">
                    <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Can I deploy to my own domain?</h3>
                    <p style="color: var(--text-secondary); font-size: 0.95rem;">Yes. Every venture is allocated a dedicated Cloudflare edge worker (Tier 2 Membrane) mapped instantly to your custom root DNS.</p>
                </div>
            </div>
        </section>

        <!-- SECTION 3.8: TERMINAL VELOCITY CTA -->
        <section style="padding: 6rem 2rem; margin: 4rem 0; border-radius: 32px; background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(236, 72, 153, 0.2)); border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; position: relative; overflow: hidden;">
            <div style="position: relative; z-index: 2;">
                <h2 style="font-size: 3rem; margin-bottom: 1.5rem;">Initiate Synthesis.</h2>
                <p style="font-size: 1.2rem; color: var(--text-secondary); margin-bottom: 3rem; max-width: 600px; margin-left: auto; margin-right: auto;">The Conglomerate fleet is ready. Deploy your instance to the global edge in under 10 seconds.</p>
                <a href="https://vendyai.com/checkout/{{VENTURE_CODE}}_sovereign" class="btn-primary" style="font-size: 1.2rem; padding: 1.25rem 3rem;">Access The Terminal</a>
            </div>
        </section>
        
        <!-- SECTION 4: SOVEREIGN FOOTER -->
        <footer style="padding: 4rem 0; border-top: 1px solid var(--glass-border); margin-top: 4rem; display: flex; justify-content: space-between; color: var(--text-secondary); font-size: 0.9rem;">
            <div>
                <div style="color: #fff; font-weight: 700; margin-bottom: 1rem;">{{VENTURE_NAME}}</div>
                <div>A MobCorp Sovereign Subsidiary.</div>
            </div>
            <div style="display: flex; gap: 2rem;">
                <a href="#" style="color: inherit; text-decoration: none;">Terms of Service</a>
                <a href="#" style="color: inherit; text-decoration: none;">Privacy Matrix</a>
                <a href="#" style="color: inherit; text-decoration: none;">System Status</a>
            </div>
        </footer>

    </main>

</body>
</html>
`;
    const hydratedHtml = html.replace(/\{\{VENTURE_NAME\}\}/g, "warpdrive.cc").replace(/\{\{VENTURE_HOOK\}\}/g, manifest.hero_subtitle).replace(/\{\{VENTURE_CODE\}\}/g, "warpdrive-cc").replace(/\{\{VENTURE_STATUS\}\}/g, "OPERATIONAL").replace(/\{\{VENTURE_BEAUTY\}\}/g, manifest.hero_description || manifest.hero_subtitle).replace(/\{\{VENTURE_PRODUCT_CODE\}\}/g, "warpdrive-cc");
    return new Response(hydratedHtml, {
      headers: { "Content-Type": "text/html;charset=UTF-8" }
    });
  }
};
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map

