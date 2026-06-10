const imgGevel = new Proxy({"src":"/_astro/gevelreiniging-hero.U9UZBSKg.webp","width":1536,"height":540,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jonathan/Sites/aquaforce-cleaningservices/src/assets/images/gevelreiniging-hero.webp";
							}
							
							return target[name];
						}
					});

export { imgGevel as i };
