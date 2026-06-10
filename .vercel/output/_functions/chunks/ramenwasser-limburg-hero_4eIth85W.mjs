const imgRamen = new Proxy({"src":"/_astro/ramenwasser-limburg-hero.IcJb0RiW.webp","width":1526,"height":540,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jonathan/Sites/aquaforce-cleaningservices/src/assets/images/ramenwasser-limburg-hero.webp";
							}
							
							return target[name];
						}
					});

export { imgRamen as i };
