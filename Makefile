
ZIP = chrome-devices-in-new-tab.zip
SOURCE_FILES = manifest.json newtab.css newtab.html newtab.js

# Target name is expand to assist zsh autocomplete.
chrome-devices-in-new-tab.zip: $(SOURCE_FILES)
	rm -rf $(ZIP)
	zip $(ZIP) $(SOURCE_FILES)

.PHONY: clean
clean:
	rm $(ZIP)