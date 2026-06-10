const imgKantoor = new Proxy({"src":"/_astro/kantoor-hero.ByOa_8ju.webp","width":1526,"height":560,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jonathan/Sites/aquaforce-cleaningservices/src/assets/images/kantoor-hero.webp";
							}
							
							return target[name];
						}
					});

export { imgKantoor as i };
