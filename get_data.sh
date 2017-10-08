fn="/home/syafiq/.thunderbird/brsk18ox.default/Mail/Local Folders/$1"
grep "Date: " "$fn" | uniq | awk '{$1=""; print substr($0,2)}' > "raw/$1.txt"
